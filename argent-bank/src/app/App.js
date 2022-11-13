// import REACT
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

// import COMPOSANTS
import Header from '../components/Header';
import Footer from '../components/Footer';
import HomePage from '../pages/HomePage';
import LoginPage from '../pages/LoginPage';
//import UserPage from '../pages/UserPage';
import ErrorPage from '../pages/ErrorPage';


function App() {
  return (
    <div className="app">
      <BrowserRouter basename={process.env.PUBLIC_URL} >
        <Header />
          <main>
            <Routes>
              <Route exact path="/" element={<HomePage />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="*" element={<ErrorPage />} /> 
              {/*
              <Route path="/user" element={<UserPage />} /> 
              */}       
            </Routes>
          </main>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
