import React from "react";
import { NavLink } from 'react-router-dom';
import './Header.css';

class Header extends React.Component{
    render(){
        return (
            <header>
                <div id="logo">
                    <img src="https://image.flaticon.com/icons/svg/1086/1086932.svg"/>
                <h1>immuList</h1>
                </div>
                <div className="nav">
                    <ul>
                        <li><a href="/dashboard" class="page-links">Dashboard</a></li>
                        <li><a href="/account" class="page-links">Account</a></li>
                        <li><a href="/" class="page-links">Home</a></li>
                    </ul>
                </div>
            </header>
        );
    }
}

export default Header;