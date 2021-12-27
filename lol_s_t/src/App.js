import React from 'react';
import {Routes, Route, BrowserRouter} from "react-router-dom";
import {Grommet} from 'grommet';
import Home from "./Home";
import Timers from "./Timers";
import TopIcon from "./pos_icons/icon-position-top.png"

// import './App.css';

function App() {
    return (
        <Grommet plain>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/timers" element={<Timers/>}/>
                    <Route path="*" element={<Home/>}/>
                </Routes>
            </BrowserRouter>
        </Grommet>
    );
}

export default App;
