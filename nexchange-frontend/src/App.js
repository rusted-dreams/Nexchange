import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes,  Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { LoginPage, SignupPage, ActivationPage } from './Routes.js';

const app = () => {
  return (
    <Router>
    <Routes>
        <Route path='/login' element={<LoginPage />}/>
        <Route path='/sign-up' element={<SignupPage />}/>
        <Route path='/activation/:activation_token' element={<ActivationPage />}/>
        <Route path="/*" element={<h1>404 page not found</h1>} />
    </Routes>
    <ToastContainer
        position="bottom-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </Router>
  )
} 

export default app