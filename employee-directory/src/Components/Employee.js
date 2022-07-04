import React, { useContext } from 'react';
import { EmployeeContext } from '../Context/EmployeeContext';

export default function Employee(employee){

    //state
    const { setSelectedEmployee, setOpenModal} = useContext(EmployeeContext);

    //format bday
    const bday = new Date(employee.dob);
    const formattedBday = ((bday.getMonth() + 1) + '/' + bday.getDate()) + '/' + bday.getFullYear();
    
    //event handler
    const handleOpenModal = () => {
        setSelectedEmployee({
            picture: employee.picture,
            firstName: employee.firstName,
            lastName: employee.lastName,
            dob: formattedBday,
            phone: employee.phone,
            email: employee.email,
            streetNum: employee.streetNum,
            streetName: employee.streetName,
            city: employee.city,
            state: employee.state,
            zip: employee.zip
        })
        setOpenModal(true);
    }

    return(
        <React.Fragment>
            <div className="card" onClick={handleOpenModal}>
                <div className="card-img-container">
                    <img className="card-img" src={employee.picture.medium} alt="employee" />
                </div>
                <div className="card-info-container">
                    <h3 id="name" className="card-name cap">{employee.firstName} {employee.lastName}</h3>
                    <p className="card-text">{employee.email}</p>
                    <p className="card-text cap">{employee.city}, {employee.state}</p>
                </div>
            </div>
        </React.Fragment>
    );
}