import React, { useState } from 'react';
import './App.css';
import ResidentsList from './Components/ResidentsList';
import Search from './Components/Search';
import Error from './Components/Error';
import 'h8k-components';

const title = "Hacker Dormitory";
function App() {
    const [errorMessage, setErrorMessage] = useState("");
    const [students, setStudents] = useState([]);

    const handleError = message => setErrorMessage(message);

    const handleAdd = student => {
        if (!students.includes(student)) {
            setStudents([...students, student]);
        }
        if (errorMessage !== "") {
            setErrorMessage("");
        }
    };

    return (
        <div className="App">
            <h8k-navbar header={title}></h8k-navbar>
            <div className="layout-column justify-content-center align-items-center w-50 mx-auto">
                <Search
                    onError={handleError}
                    onAdd={handleAdd}
                />
                {errorMessage && <Error errorMessage={errorMessage}/>}
                <ResidentsList students={students}/>
            </div>
        </div>
    );
}

export default App;
