import React, { useState } from 'react';
import logo from './logo.png';
import calender from './calender.png';
import './Header.css'; // Create a CSS file for styling

const Header = () => {
  // State to manage the visibility of dropdowns
  const [dropdown1Visible, setDropdown1Visible] = useState(false);
  const [dropdown2Visible, setDropdown2Visible] = useState(false);
  const [dropdown3Visible, setDropdown3Visible] = useState(false);

  // Function to toggle dropdown visibility
  const toggleDropdown = (dropdownNumber) => {
    switch (dropdownNumber) {
      case 1:
        setDropdown1Visible(!dropdown1Visible);
        break;
      case 2:
        setDropdown2Visible(!dropdown2Visible);
        break;
      case 3:
        setDropdown3Visible(!dropdown3Visible);
        break  
      default:
        break;
    }
  };

  return (
    <div className="header">
      <div className='site'>
        <div className='site-name1'>
        <img src={logo} alt="some example image" height='100px' width='250px'/>
        </div> 
      </div>
      <div className='site-nav'>
        <div className='site-name2'>Home</div>   
        <button onClick={() => toggleDropdown(1)}>About us</button>
        {dropdown1Visible && (
          <div className="dropdown-content1">
            {
              <div className='main'>
                <div className='m1'>
                  <div className='content1'>About us</div>
                </div>
                <div className='m2'>
                  <div className='content2'>Who are we</div>
                  <div className='content2'>Our Value</div>
                  <div className='content2'>What we do</div>
                  <div className='content2'>Our culture</div>
                </div>
              </div>
            }
          </div>
        )}

        <button onClick={() => toggleDropdown(2)}>Services</button>
        {dropdown2Visible && (
          <div className="dropdown-content2">
            {
              <div className='main'>
                <div className='c1'>
                  <div className='cont1'>Digital Marketing</div>
                  <div className='cont1'>Digital Marketing</div>
                  <div className='cont1'>Digital Marketing</div>
                  <div className='cont1'>Digital Marketing</div>
                  <div className='cont1'>Digital Marketing</div>
                  <div className='cont1'>Digital Marketing</div>
                  <div className='cont1'>Digital Marketing</div>
                </div>
                <div className='m2'>
                  <div className='content2'>Ad Campaign</div>
                  <div className='content2'>Social Media Optimization</div>
                  <div className='content2'>Search Engine Optimization</div>
                  <div className='content2'>Amazon Marketing</div>
                  <div className='content2'>Paid Marketing</div>
                  <div className='content2'>Influncer Marketing</div>
                  <div className='content2'>Network/Referral Marketing</div>
                  <div className='content2'>White Label Services</div>
                  <div className='content2'>Google analatics</div>
                </div>
              </div>
            }
          </div>
        )}
        <div className='site-name3'>Portfolio</div>  
        <div className='site-name4'>Contact Us</div> 
        <div className='site-name5'>Carrer</div> 
        <div className='site-name6'>Blog</div>
        <div className='site-name7'>Tech</div> 
      </div>
      <div className='calender'>
        <button onClick={() => toggleDropdown(3)}>Setup An Appointment</button>
          {dropdown3Visible && (
            <div className="dropdown-content3">
              {
                <div className='dc3'>
                  <div className='msg'>Book a meeting with Techqilla</div>
                  <div className='cal'><img src={calender} alt="some example image" height='300px' width='450px'/></div>
                </div>
              }
            </div>
          )}
        </div>       
    </div>
  );
};

export default Header;

