import './App.css';
import Header from './Components/Header';
import SearchBar from './Components/SearchBar';
import EmployeeList from './Components/EmployeeList';
import React from 'react';

function App() {

    return (
        <React.Fragment>
            <Header />
            <SearchBar />
            <EmployeeList />      
        </React.Fragment>
    );
}

export default App;
