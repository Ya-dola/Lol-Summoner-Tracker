import React from 'react';
import {Routes, Route, BrowserRouter} from "react-router-dom";
import {Grommet} from 'grommet';
import Home from "./Home";
import GameTimers from "./GameTimers";

// import './App.css';

function App() {
    return (
        <Grommet plain>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/gameTimers" element={<GameTimers/>}/>
                    <Route path="*" element={<Home/>}/>
                </Routes>
            </BrowserRouter>
        </Grommet>
    );
}

export default App;
