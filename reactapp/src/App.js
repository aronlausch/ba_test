import React from 'react';
import './App.css';
import Header from './Header.js';  
import Tabelle from './Tabelle.js';
import { BrowserRouter, Route, Routes } from "react-router-dom";


const App = () => {
  return (
    <BrowserRouter>
    <div className="App">
      <Routes>
        <Route path="/" element={<><Header></Header> <Tabelle></Tabelle> </>} />
      </Routes>
    </div>
    </BrowserRouter>

  );
}

export default App;
