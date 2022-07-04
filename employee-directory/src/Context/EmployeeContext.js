import React, { useState } from 'react';

export const EmployeeContext = React.createContext();

export const Provider = (props) => {

    const [ selectedEmployee, setSelectedEmployee ] = useState({});
    const [ openModal, setOpenModal ] = useState(false);
    const [ query, setQuery ] = useState("");

    return(
        <EmployeeContext.Provider 
            value={
                { selectedEmployee, 
                    setSelectedEmployee, 
                    openModal, 
                    setOpenModal,
                    query, 
                    setQuery }
                }>
            { props.children }
        </EmployeeContext.Provider>
    )
}