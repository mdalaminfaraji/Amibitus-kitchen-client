import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../Providers/AuthProviders';

const Navbar = () => {
    const {user,  logOUt}=useContext(AuthContext);
    return (
        <div className="navbar bg-lime-200 px-5">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
      <li>
            <NavLink
              to='/'
              aria-label='Home'
              title='Home'
              className={({ isActive }) => (isActive ? 'active' : 'default')}
            >
              Home
            </NavLink>
          </li>
      <li>
            <NavLink
              to='/about'
              aria-label='About Us'
              title='About Us'
              className={({ isActive }) => (isActive ? 'active' : 'default')}
            >
              About Us
            </NavLink>
          </li>
      <li>
            <NavLink
              to='/blog'
              aria-label='blog'
              title='blog'
              className={({ isActive }) => (isActive ? 'active' : 'default')}
            >
              Blog
            </NavLink>
          </li>
      <li>
            <NavLink
              to='/contact'
              aria-label='contact'
              title='contact'
              className={({ isActive }) => (isActive ? 'active' : 'default')}
            >
              Contact
            </NavLink>
          </li>
      </ul>
    </div>
    <img className='w-10 rounded-full' src="../public/logo1.jfif" /> <a className=" font-bold ps-3 text-2xl italic">Ambitious Kitchen</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
   
   
      <li>
            <NavLink
              to='/'
              aria-label='Home'
              title='Home'
              className={({ isActive }) => (isActive ? 'active' : 'default')}
            >
              Home
            </NavLink>
          </li>
      <li>
            <NavLink
              to='/about'
              aria-label='About Us'
              title='About Us'
              className={({ isActive }) => (isActive ? 'active' : 'default')}
            >
              About Us
            </NavLink>
          </li>
      <li>
            <NavLink
              to='/blog'
              aria-label='blog'
              title='blog'
              className={({ isActive }) => (isActive ? 'active' : 'default')}
            >
              Blog
            </NavLink>
          </li>
      <li>
            <NavLink
              to='/contact'
              aria-label='contact'
              title='contact'
              className={({ isActive }) => (isActive ? 'active' : 'default')}
            >
              Contact
            </NavLink>
          </li>
     
    </ul>
  </div>
  {user ?<><div className=" navbar-end">
          <img title={user?.displayName} className='w-10 rounded-full' src={user?.photoURL} /><div className='font-bold text-sm bg-lime-300 ms-3 p-3 hover:bg-lime-500 rounded-full cursor-pointer' onClick={logOUt}>LogOut</div>
         </div>
         
         </> 
    :<div className="navbar-end">
    <Link to="/login" className="font-bold text-xl bg-lime-300 p-3 me-3 hover:bg-lime-500  rounded-full">Login</Link>
  </div>
  }
</div>
    );
};

export default Navbar;