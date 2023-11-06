import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
    return (
        <div>
            <li>  <NavLink to='/login'>Login</NavLink></li>
            <li>  <NavLink to='/register'>Register</NavLink></li>
            <li>  <NavLink to='/createAssignment'>Create Assignment</NavLink></li>
        </div>
    );
};

export default NavBar;