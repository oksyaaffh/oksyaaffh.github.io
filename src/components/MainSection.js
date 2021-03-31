import React from 'react';
import './MainSection.css'
import logo from "../galaxy1.jpg"

function MainSection() {
    return (
        <div className="main-container">
        <img src={logo} className="galaxy-logo" alt="galaxy"/>            
        <h1>POKEMON GALAXY</h1>
        <p>Catch & Collect your pokemon now!</p>
        
        </div>
    )
}

export default MainSection
