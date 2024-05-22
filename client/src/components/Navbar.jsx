import React from 'react';
import { NavLink } from 'react-router-dom';
import "./Navbar.css";
import { useAuth } from '../store/auth';

const Navbar = () => {

    const { isLoggedIn, user } = useAuth();
    console.log("login or not", isLoggedIn);

    return (
        <>
            <header>
                <div className='container'>
                    <div className='logo-brand'>
                        <NavLink to="/">Anupam Consultancy Services</NavLink>
                    </div>

                    <nav>
                        <ul>
                            <li> <NavLink to="/"> Home </NavLink> </li>
                            <li> <NavLink to="/about"> About  </NavLink> </li>
                            <li> <NavLink to="/contact"> Contact </NavLink> </li>
                            <li> <NavLink to="/service"> Service </NavLink> </li>
                            {isLoggedIn ? (
                                <li> <NavLink to="/logout"> Logout </NavLink> </li>
                            ) : (
                                <>
                                    <li> <NavLink to="/register"> Register </NavLink> </li>
                                    <li> <NavLink to="/login"> Login </NavLink> </li>
                                </>
                            )}
                            {user.isAdmin ? (
                                <li> <NavLink to="/admin"> Admin </NavLink> </li>
                            ) : (<></>)}
                        </ul>
                    </nav>
                </div>
            </header>
        </>
    )
}

export default Navbar;
