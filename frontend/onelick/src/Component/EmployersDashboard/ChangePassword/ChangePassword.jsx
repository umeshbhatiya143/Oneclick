import React, { useState, useEffect } from 'react'
import Sidebar from '../Sidebar/Sidebar'
import { Link } from 'react-router-dom';
import './ChangePassword.css'
import Lottie from 'react-lottie';
import changePassword from '../../../assets/change-password.json'

const ManageJobs = () => {
  const [dropOpen, setdropOpen] = useState(false)

  // sidebar menu
  const handleMenu = () => {
    const menu = document.getElementById('sidebar');

    if (dropOpen) {
      menu.style.height = "0px"
    }
    else {
      menu.style.height = "800px"
    }
    setdropOpen(!dropOpen);
  }

  // lottie file animation
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: changePassword,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };

  return (
    <section id='ChangePassword_container'>

      {/* css for this section inherited from eployers dashboard */}
      <div className="dashboard_heading_hld">
        <h1>Change Password!</h1>
        <p>Ready to jump back in?</p>
      </div>

      {/* Dashboard menu for mobile */}
      <div className="dashboard_menu" onClick={() => handleMenu()}>
        <div className="burger">
          <div className="line1"></div>
          <div className="line2"></div>
          <div className="line3"></div>
        </div>
        <span>Menu</span>
      </div>
      {/* sidebar for mobile */}
      <div id="sidebar">
        <Sidebar />
      </div>



      <div className="password_container">
        <div data-aos="zoom-in" className="left">
          <Lottie
            options={defaultOptions}
            height={350}
            width={350}
          />
        </div>
        <div data-aos="fade-left" className="right">
          <form action="">
            <input type="password" placeholder='old password...' />
            <input type="password" placeholder='new password...' />
            <input type="password" placeholder='new password...' />
            <input type="submit" value="Change Password" />
          </form>
        </div>

      </div>

      {/* copyright content */}
      <div className="copyright_hld">
        <p>&copy; 2023 All Rights Reserved, Developed by Umesh Bhatiya</p>
      </div>
    </section>
  )
}

export default ManageJobs
