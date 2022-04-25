import React from 'react';
import './Common_Header.scss'
import logo from "Components/Assets/logo.png"
const ComponentsExample = () => {
    return (
        <div className='common-header-wrapper'>
            <img src={logo}></img>
                <div className="header-logo"></div>
        </div>
    );
};

export default ComponentsExample;
