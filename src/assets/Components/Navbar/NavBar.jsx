import React, { useContext, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Navbar.css'
import { AuthContext } from '../../Providers/AuthProvider';
import Swal from 'sweetalert2';
const NavBar = () => {

  const { user, logOut } = useContext(AuthContext)
  const [isMenuOpen, setIsMenuOpen] = useState(false);
// console.log(user.photoURL);
  const handleSignOut = () => {
    logOut()
      .then(res => {
        Swal.fire(
          'Good job!',
          'Logged Out Successfully!',
          'success'
        )
      })
      .catch(error => {
        Swal.fire({
          title: 'Error!',
          text: 'Failed To Logged Out',
          icon: 'error',
          confirmButtonText: 'Cool'
        })
      })
  }

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className='bg-[#160733]'>
      <header className="p-4 dark:bg-gray-800 dark:text-gray-100">
        <div className="container flex justify-between h-16 mx-auto">
          <div className="flex w-full">
            <img src="https://assets-global.website-files.com/63a9fb94e473f36dbe99c1b1/652e8a149bed1cb856d44854_64a2fa3c9a18a98054051689_rxrFjodrRzS4qfiDoJ9K.svg" alt="" />
            <span className="self-center text-2xl font-semibold text-purple-500"><Link to='/'>StudySync</Link></span>
            <button className="p-4 lg:hidden ml-4 md:ml-40" onClick={toggleMenu}>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6 dark:text-gray-100 text-white">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            </button>
            <ul className="items-stretch hidden space-x-3 lg:flex "  id='sidebar'>
				<li className="flex">
					<a rel="noopener noreferrer" href="#" className="flex items-center px-4 -mb-1 border-b-2 dark:border-transparent text-white font-bold text-lg"> <NavLink to="/login">Login</NavLink></a>
				</li>
				<li className="flex">
					<a rel="noopener noreferrer" href="#" className="flex items-center px-4 -mb-1 border-b-2 dark:border-transparent dark:text-violet-400 dark:border-violet-400 text-white font-bold text-lg"> <NavLink 
                     className={({ isActive, isPending }) =>
                     isPending ? "pending" : isActive ? "active" : ""
                   }
                    
                    to="/register">Register</NavLink></a>
				</li>
				<li className="flex">
					<a rel="noopener noreferrer" href="#" className="flex items-center px-4 -mb-1 border-b-2 dark:border-transparent dark:text-violet-400 dark:border-violet-400 text-white font-bold text-lg">    <NavLink to="/createAssignment">Create Assignment</NavLink></a>
				</li>
				<li className="flex">
					<a rel="noopener noreferrer" href="#" className="flex items-center px-4 -mb-1 border-b-2 dark:border-transparent  text-white font-bold text-lg"> <NavLink to="/allAssignments">All Assignment</NavLink></a>
				</li>
				<li className="flex">
					<a rel="noopener noreferrer" href="#" className="flex items-center px-4 -mb-1 border-b-2 dark:border-transparent text-white font-bold text-lg"> <NavLink to="/submittedAssignments">Submitted Assignment</NavLink></a>
				</li>
			</ul>
          </div>
          <div className="items-center mt-3 justify-center flex-shrink-0 lg:flex ml-16">
            {user && (
              <div className="flex items-center">
                <div className="group relative">
                  <img
                    src={user.photoURL} // Assuming user has a photoURL property
                    alt="User"
                    className="w-8 h-8 rounded-full cursor-pointer transform transition duration-300 group-hover:scale-110"
                    title={user.displayName}
                  />
                  <div className="hidden group-hover:block absolute bottom-0 left-1/2 transform -translate-x-1/2 bg-white p-2 rounded-md">
                    <p className="text-sm">{user.displayName}</p>
                  </div>
                </div>
                <button
                  onClick={handleSignOut}
                  className="  btn hover:bg-gradient-to-r from-[#3940D6] to-[#7F1D9B] mx-auto text-black border-none rounded-none
                 bg-white w-[30%] md:w-[50%] pt-3 pb-2"
                >
                 Log Out
                </button>
              </div>
            )}
            {!user && (
              <button className="btn hover:bg-gradient-to-r from-[#3940D6] to-[#7F1D9B] mx-auto text-black border-none rounded-none
                  bg-white' bg-white ml-3 pt-3 pb-2">
                <Link to="/login">Log In</Link>
              </button>
            )}
          </div>
        </div>
         
          
      
        {isMenuOpen && (
          <ul className="lg:hidden bg-gray-200 p-3">
            <li>
              <NavLink to="/login">Login</NavLink>
            </li>
            <li>
              <NavLink to="/register">Register</NavLink>
            </li>
            <li>
              <NavLink to="/createAssignment">Create Assignment</NavLink>
            </li>
            <li>
              <NavLink to="/allAssignments">All Assignment</NavLink>
            </li>
            <li>
              <NavLink to="/submittedAssignments">Submitted Assignments</NavLink>
            </li>
            <li>
              <NavLink to="/marked">Marked Assignment</NavLink>
            </li>
          </ul>
        )}
      </header>
    </div>
  );
};

export default NavBar;
