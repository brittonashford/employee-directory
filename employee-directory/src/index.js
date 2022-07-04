import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import './normalize.css';
import App from './App';
import { Provider } from './Context/EmployeeContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider>
        <React.StrictMode>
            <App />
        </React.StrictMode>
    </Provider>
);


