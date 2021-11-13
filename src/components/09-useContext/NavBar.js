import React from 'react';
import { Link, NavLink } from 'react-router-dom';

export const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
                <Link to="/" className="navbar-brand" >UseContext</Link>           
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <NavLink exact="true" activeClassName="active" to="/" className="nav-link" aria-current="page" >Home</NavLink>
                        <NavLink exact="true" activeClassName="active" to="/About" className="nav-link" >About </NavLink>
                        <NavLink exact="true" activeClassName="active" to="/Login" className="nav-link" >Login</NavLink>
                    </div>
                </div>
        </nav>
    )
}
