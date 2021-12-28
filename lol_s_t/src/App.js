import React, {useState} from 'react';
import {Routes, Route, BrowserRouter} from "react-router-dom";
import {grommet, Grommet} from 'grommet';
import HeaderBar from "./HeaderBar";
import Home from "./Home";
import GameTimers from "./GameTimers";

// import './App.css';

function App() {
    const [darkMode, setDarkMode] = useState(true);

    return (
        <Grommet theme={grommet} themeMode={darkMode ? "dark" : "light"} full={"min"}>
            <BrowserRouter>
                <HeaderBar darkMode={darkMode} setDarkMode={setDarkMode}/>
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
