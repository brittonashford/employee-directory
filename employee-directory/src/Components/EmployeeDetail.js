import React, { useContext } from "react";
import { EmployeeContext } from '../Context/EmployeeContext'

export function EmployeeDetail() {

    //state
    const { selectedEmployee, setOpenModal} = useContext(EmployeeContext);

    //event handlers
    const handleCloseModal = () => {
        setOpenModal(false)
    }

    const handleClickAway = (e) => {
        let modalContainer = document.querySelector('.modal-container');
        if(e.target === modalContainer){
            setOpenModal(false);
        }
    }

    return (
            <div className="modal-container" onClick={handleClickAway}>
                <div className="modal">
                    <button type="button" id="modal-close-btn" className="modal-close-btn btn" onClick={handleCloseModal}><strong>X</strong></button>
                    <div className="modal-info-container">
                        <img className="modal-img" src={selectedEmployee.picture.large} alt="employee" />
                        <h3 id="name" className="modal-name cap">{selectedEmployee.firstName} {selectedEmployee.lastName}</h3>
                        <p className="modal-text">{selectedEmployee.email}</p>
                        <hr />
                        <p className="modal-text">{selectedEmployee.phone}</p>
                        <p className="modal-text">{selectedEmployee.streetNum} {selectedEmployee.streetName} {selectedEmployee.city}, {selectedEmployee.state} {selectedEmployee.postcode}</p>
                        <p className="modal-text">Birthday: {selectedEmployee.dob}</p>
                    </div>
                </div>   
            </div>
    );
}

export default EmployeeDetail;