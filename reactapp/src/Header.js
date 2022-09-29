import * as React from 'react';
import logo from './wwu_logo.jpg';
import './App.css';


export default function Header_test() {
    return (
    <div>
        <div className="img_wrapper">
            <img src={logo} className="App-logo" alt="logo" />
        </div>
        <h2 className="title">Partner Universities of the School of Business and Economics </h2>
    </div>
    );
}