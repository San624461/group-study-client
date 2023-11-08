import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
    return (
        <div>
            <li>  <NavLink to='/login'>Login</NavLink></li>
            <li>  <NavLink to='/register'>Register</NavLink></li>
            <li>  <NavLink to='/createAssignment'>Create Assignment</NavLink></li>
            <li>  <NavLink to='/allAssignments'>All Assignment</NavLink></li>
            <li>  <NavLink to='/submittedAssignments'>Submitted Assignment</NavLink></li>
            <li>  <NavLink to='/marked'>Marked Assignment</NavLink></li>
            
        </div>
    );
};

export default NavBar;