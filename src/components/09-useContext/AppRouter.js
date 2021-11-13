import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Routes,
} from "react-router-dom";
import { NavBar } from './NavBar';

import {AboutScreen} from './AboutScreen';
import {LoginScreen} from './LoginScreen';
import {HomeScreen} from './HomeScreen';

export const AppRouter = () => {
    return (
        <Router>
            <div>
                <NavBar />
                <div className="container">

                <Routes>
                    <Route exact path="/about" element={<AboutScreen />} />
                    <Route exact path="/login" element={<LoginScreen />} />
                    <Route exact path="/" element={<HomeScreen />} />
                    <Route path="*" element={<HomeScreen/>} />
                </Routes>
                </div>
            </div>
        </Router>
    )
}
