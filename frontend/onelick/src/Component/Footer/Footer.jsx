import React from 'react'
import './Footer.css'
import logo from '../../assets/logo.png'
import { FaFacebookF } from 'react-icons/fa';
import { AiOutlineInstagram } from 'react-icons/ai';
import { AiOutlineTwitter } from 'react-icons/ai';
import { FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
  return (
    <section id='Footer'>
      <div data-aos="fade-up"
        // data-aos-duration="2000"
        className="footer_up">
        <ul className="logo_address_hld">
          <li className='footer_logo'>
            <img src={logo} alt="logo" />
          </li>
          <li style={{ display: "flex", flexDirection: "column" }}>
            <span style={{ color: "#1967D2" }}>Call us</span>
            <span>123 456 7890</span>
          </li>
          <li>
            <p>Address : Lorem ipsum dolor sit amet consectetur adipisicing elit..</p>
          </li>
        </ul>
        <div className='footer_links_hld'>
          <ul className="for_candidates">
            <li>
              <h4>For Candidates</h4>
            </li>
            <li>
              <p>Browse Jobs</p>
            </li>
            <li>
              <p>Browse Categories</p>
            </li>
            <li>
              <p>Candidate Dashboard</p>
            </li>
            <li>
              <p>Job Alerts</p>
            </li>
            <li>
              <p>My Bookmarks</p>
            </li>
          </ul>
          <ul className="for_employers">
            <li>
              <h4>
                For Employers
              </h4>
            </li>
            <li>
              <p>Browse Candidates</p>
            </li>
            <li>
              <p>Employer Dashboard</p>
            </li>
            <li>
              <p>Add Job</p>
            </li>
            <li>
              <p>Job Packages</p>
            </li>
          </ul>
          <ul className="about_us_footer">
            <li>
              <h4>
                About Us
              </h4>
            </li>
            <li>
              <p>About Us</p>
            </li>
            <li>
              <p>Job Page Invoice</p>
            </li>
            <li>
              <p>Terms page</p>
            </li>
            <li>
              <p>Blog</p>
            </li>
            <li>
              <p>Contact</p>
            </li>
          </ul>
          <ul className="helpful_resources">
            <li>
              <h4>Helpful Resources</h4>
            </li>
            <li>
              <p>Site Map</p>
            </li>
            <li>
              <p>Terms of Use</p>
            </li>
            <li>
              <p>Privacy Center</p>
            </li>
            <li>
              <p>Security Center</p>
            </li>
            <li>
              <p>Accessibilty Center</p>
            </li>
          </ul>
        </div>
      </div>
      <div className="footer_down">
        <p data-aos="fade-right"
          // data-aos-duration="2000"
        >© 2023 Superio by ib-themes. All Right Reserved.</p>
        <div data-aos="fade-left"
          // data-aos-duration="2000"
          className="social_icons">
          <FaFacebookF />
          <AiOutlineInstagram />
          <AiOutlineTwitter />
          <FaLinkedinIn />
        </div>
      </div>
    </section>
  )
}

export default Footer
