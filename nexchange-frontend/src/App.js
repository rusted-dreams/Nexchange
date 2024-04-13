import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes,  Route } from "react-router-dom";
import { LoginPage, SignupPage } from './Routes.js';

const app = () => {
  return (
    <Router>
    <Routes>
        <Route path='/login' element={<LoginPage />}/>
        <Route path='/sign-up' element={<SignupPage />}/>
        <Route path='/activation/:url' element={<SignupPage />}/>
        <Route path="/*" element={<h1>404 page not found</h1>} />
    </Routes>
    </Router>
  )
} 

export default app