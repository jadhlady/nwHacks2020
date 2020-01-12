import React from "react";
import { NavLink } from 'react-router-dom';
import './Header.css';

class Header extends React.Component{
    render(){
        return (
            <header>
                <div className="logo">
                    
                    <nav>
                        <div className="navLogo">
                            <h1>Immunization App</h1>
                            <img id='headerPicture' src="https://image.flaticon.com/icons/svg/1086/1086932.svg"/>
                        </div>
                        
                        <div className="titles">
                            <NavLink exact activeClassName="active" to="/dashboard">
                                Dashboard
                            </NavLink>
                        </div>
                        <div className="titles">
                            <NavLink activeClassName="active" to="/account">
                                Account
                            </NavLink>
                        </div>
                        <div className="titles">
                            <NavLink activeClassName="active" to="/">
                                Sign out
                            </NavLink>
                        </div>
                    </nav>
                </div>
                
                
            </header>
        );
    }
}

export default Header;