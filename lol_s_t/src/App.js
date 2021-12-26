import React from 'react';
import {Routes, Route, Link, BrowserRouter} from "react-router-dom";
import {Grommet} from 'grommet';
import Home from "./Home";

// import './App.css';

function App() {
    return (
        <Grommet plain>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                </Routes>
            </BrowserRouter>
        </Grommet>
    );
}

export default App;
