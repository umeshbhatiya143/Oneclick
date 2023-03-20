import React, { useState, useEffect } from "react";
import logo from '../../assets/logo.png'
import './Navbar.css'
import $ from 'jquery';
import { Link } from 'react-router-dom'
import { AiOutlineUser } from 'react-icons/ai';
import { RxCrossCircled } from 'react-icons/rx';
import { FaFacebookF } from 'react-icons/fa';
import { AiOutlineInstagram } from 'react-icons/ai';
import { AiOutlineTwitter } from 'react-icons/ai';
import { FaLinkedinIn } from 'react-icons/fa';
import Login from "../LoginSignup/Login";
import Signup from "../LoginSignup/Signup";

export default function Navbar() {
    const [navToggle, setnavToggle] = useState(true)
    const [toggle, setToggle] = useState(false);
    const [subMenu, setSubMenu] = useState(false);
    const [showLoginForm, setshowLoginForm] = useState(false)
    const [showSignupForm, setshowSignupForm] = useState(false)

    $(document).ready(function () {

        //Mobile hamburger open and close
        $(".hamburger").click(function () {
            $("#nav-items-holder").toggleClass("mobile_open", navToggle);
            setnavToggle(!navToggle);
            // setToggle(!toggle);
        });
        $("#menu_close").click(function () {
            $("#nav-items-holder").toggleClass("mobile_open", navToggle);
            setnavToggle(!navToggle);
            // setToggle(!toggle);
        });


    });

    useEffect(() => {

    }, [navToggle, showLoginForm, showSignupForm])

    //     const myElement = document.getElementById("nav-items-holder");
    // myElement.style.color = "red";



    return (
        <>
            <nav id="header" className="glass">
                <div id="nav-container">
                    <div id="logo-holder">
                        <Link to="hero-home" spy={true} smooth={true} className="link">
                            <img id="logo" src={logo} alt="" />
                        </Link>

                        {/* <input id="toggle" type="checkbox"></input> */}
                        <div className="userProfile">
                            <AiOutlineUser size={30} />
                        </div>
                        <label htmlFor="toggle" className="hamburger">
                            <div className="top-bun"></div>
                            <div className="meat"></div>
                            <div className="bottom-bun"></div>
                        </label>

                    </div>

                    <div id="nav-items-holder" className="nav-options-active mobile_close">
                        <div id="mobile-menu-logo">
                            <Link to="hero-home" spy={true} smooth={true} className="link">
                                <img id="logo" src={logo} alt="" />
                            </Link>
                            <div id="menu_close" className="menu_close">
                                <RxCrossCircled size={30} />
                            </div>
                        </div>
                        <div id="n-home">

                            <Link to="/" spy={true} smooth={true} className="n_link">
                                Home
                            </Link>

                        </div>
                        {/* <!-- about --> */}
                        <div id="n-findJobs">

                            <Link to="findjobs" spy={true} smooth={true} className="n_link">
                                Find Jobs
                            </Link>

                        </div>

                        <div id="n-Employers">

                            <Link to="employers" spy={true} smooth={true} className="n_link">
                                Employers
                            </Link>

                        </div>

                        <div id="n-Candidates">

                            <Link to="candidates" spy={true} smooth={true} className="n_link">
                                Candidates
                            </Link>

                        </div>
                        <div id="n-Blog" style={{ textAlign: 'center' }}>

                            {/* <a href="blogs" className="n_link" style={{ textAlign: 'center' }}>
                                Blog
                            </a> */}
                            <Link to="blogs" className="n_link">
                                Blogs
                            </Link>

                        </div>
                        <div id="contacto" style={{ textAlign: 'center' }}>

                            {/* <a href="/ourstory" className="n_link" style={{ textAlign: 'center' }}>
                                Contact Us
                            </a> */}

                        </div>

                        {/* for mobile-menu */}

                        <div id="n-dashboard">
                            <Link to="dashboard" spy={true} smooth={true} className="n_link">
                                Dashboard
                            </Link>
                        </div>
                        <div id="mobile_jobPost">
                            Job Post
                        </div>
                        <div id="social_details">
                            <span style={{ fontWeight: 500, color: "#7E7E7E" }}>Call us</span>
                            <span style={{ fontWeight: 500, color: "black" }}>123 456 789</span>

                            <div className="social_icons">
                                <FaFacebookF />
                                <AiOutlineInstagram />
                                <AiOutlineTwitter />
                                <FaLinkedinIn />
                            </div>
                        </div>


                    </div>
                    <div id="n-loginSignup">

                        {/* <Link to="/login"> */}
                        <div className="n-loginSignup" onClick={() => setshowLoginForm(!showLoginForm)}>
                            Login / Register
                        </div>
                        {/* </Link> */}
                        <div className="n-jobPost">
                            Job Post
                        </div>
                    </div>
                </div>
            </nav>

            {/* login signup pages */}
            {showLoginForm && <div
                className="nav_login_container">
                <Login
                    showLoginForm={showLoginForm} setshowLoginForm={setshowLoginForm}
                    showSignupForm={showSignupForm} setshowSignupForm={setshowSignupForm}
                />
            </div>}
            {showSignupForm && <div
                className="nav_login_container">
                <Signup
                    showLoginForm={showLoginForm} setshowLoginForm={setshowLoginForm}
                    showSignupForm={showSignupForm} setshowSignupForm={setshowSignupForm}
                />
            </div>}
        </>
    )
}