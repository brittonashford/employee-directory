import React, { useState, useEffect, useContext } from 'react';
import EmployeeDetail from './EmployeeDetail';
import Employee from './Employee';
import { EmployeeContext } from '../Context/EmployeeContext';
import ReactPaginate from 'react-paginate';

export default function EmployeeList(){

    //state
    const [ employees, setEmployees ] = useState([]);
    const [ filteredEmployees, setFilteredEmployees ] = useState([]);
    const [ isLoading, setIsLoading ] = useState(true);
    const [ pageNumber, setPageNumber ] = useState(0);
    // const [ pageCount, setPageCount ] = useState(0);

    //context
    const { openModal, setOpenModal, query } = useContext(EmployeeContext);

    //fetch data, set state
    useEffect(() => {
        const url = "https://randomuser.me/api/?results=50&nat=us"

        const fetchData = async () => {
            try {
                const response = await fetch(url);
                const data = await response.json();
                setEmployees(data.results);
                setIsLoading(false);
            } catch (error) {
                console.log("error", error);
            }
        };

        fetchData()
    }, []);

    //filter, paginate, and map
    useEffect(() => {
        setFilteredEmployees(employees.filter((employee) =>
            (employee.name.first.toLowerCase().includes(query) || employee.name.last.toLowerCase().includes(query))));              
        },[query, employees])

    useEffect(() => {
        setPageNumber(0);
    },[query])

    const perPage = 12;
    const pageCount = Math.ceil(filteredEmployees.length / perPage);

    if(pageNumber > pageCount && filteredEmployees.length){
        setPageNumber(0);
    }

    const startPos = pageNumber * perPage;
    
    const displayEmployees = filteredEmployees
        .slice(startPos, startPos + perPage)
        .map((employee, index) => (   
            <Employee 
                key={index}
                picture={employee.picture}
                firstName={employee.name.first}
                lastName={employee.name.last}
                dob={employee.dob.date}
                phone={employee.phone}
                email={employee.email}
                streetNum={employee.location.street.number}
                streetName={employee.location.street.name}
                city={employee.location.city}
                state={employee.location.state}
                zip={employee.location.postcode}
            />));
     
     
    const changePage = ({ selected }) => {     
        setPageNumber(selected ? selected : 0);
    };

    return(        
        <React.Fragment>
            <div className="employee-list">
                <div className="employee-list-container wrap">
                    { isLoading ? (
                        <h2>Loading...</h2>
                    ) : ( displayEmployees.length? 
                        [displayEmployees] 
                        : <h2>No results found</h2>                                                       
                        )}
                    <div className="pagination-wrapper">
                        <div className="pagination-btn-container">
                            <ReactPaginate
                                    previousLabel={"prev"}
                                    nextLabel={"next"}
                                    pageCount={pageCount}
                                    onPageChange={changePage}
                                    containerClassName={"pagination-btn-container"}
                                    previousLinkClassName={"previous-btn"}
                                    nextLinkClassName={"next-btn"}
                                    disabledClassName={"pagination-disabled"}
                                    activeClassName={"pagination-active"}
                                />  
                            </div>
                    </div>

                    {openModal && <EmployeeDetail setModal={setOpenModal} />}
                </div>
            </div>
        </React.Fragment>
    );
}