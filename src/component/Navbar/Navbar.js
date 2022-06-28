import React from 'react';
import './Navbar.css'

const Navbar = () => {
      return (
            <div className='navbar'>
                  <div className="container">
                        <span className='logo'>Booking.com</span>
                        <div className="navItem">
                              <button className="navButton">Login</button>
                              <button className="navButton">Register</button>
                        </div>
                  </div>
            </div>
      );
};

export default Navbar;