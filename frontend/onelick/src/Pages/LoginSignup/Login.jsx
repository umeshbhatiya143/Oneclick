import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/logo.png"; // Replace with your own logo image
// import GoogleLogin from "react-google-login";
// import FacebookLogin from "react-facebook-login";
import "./LoginSignup.css"; // Import your own CSS styles
import { FaFacebookF } from 'react-icons/fa';
import { AiOutlineGoogle } from 'react-icons/ai';
import { RxCross2 } from 'react-icons/rx';
import "react-toastify/dist/ReactToastify.css"
import {ToastContainer,toast} from "react-toastify";

const Login = () => {
    const [values, setValues] = useState({
        email:"",
        password:"",
    });

    // toastify
    const toastOptions = {
      position: "bottom-right",
      autoClose: 1000,
      pauseOnHover:true,
      draggable:true,
      theme:"dark",
  }
 
  const handleValidation = () =>{
      const{ password, username} = values;
      if(password === ""){
         toast.error("Email and Password is required", toastOptions);
         return false;
      }else if(username.length === ""){
         toast.error("Email and Password is required", toastOptions);
         return false;
      }
      return true;
 };

    const handleChange = (event) => {
        setValues({...values, [event.target.name]:event.target.value});
    };

  const handleLogin = async (e) => {
    e.preventDefault();
    handleValidation();
    console.log(values);
    // TODO: Handle login logic here
  };

  const handleGoogleLoginSuccess = (response) => {
    // TODO: Handle Google login success here
  };

  const handleFacebookLoginSuccess = (response) => {
    // TODO: Handle Facebook login success here
  };

  const handleLoginFailure = (error) => {
    // TODO: Handle login failure here
  };

  return (
    <section id="login-page">
      <div className="login-container">
      <div className="login_close">
          <span><RxCross2 size={20}/></span>
        </div>
        <form action="" onSubmit={(e)=>handleLogin(e)}>
       
          <h3>Login to onelick</h3>
          <div className="form-group">
            <label htmlFor="email">Username:</label>
            <input
              type="text"
              id="email"
              name="email"
              value={values.email}
              onChange={handleChange}
              placeholder="Username"
     
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              name="password"
              value={values.password}
              onChange={handleChange}
              placeholder="Password"
             
            />
          </div>
          <div className="forgot_checkbox_hld">
            <div className="checkbox">
              <input type="checkbox" id="remember-me" />
              <label htmlFor="remember-me"><p>Remember me</p></label>
            </div>
            <div className="forgot_password">
              <Link to="/forgot-password"><p>Forgot Password?</p> </Link>
            </div>
          </div>
          <button type="submit" className="btn-primary">
            Login
            </button>
          {/* <div className="form-group">
            <GoogleLogin
              clientId="YOUR_GOOGLE_CLIENT_ID"
              buttonText="Login with Google"
              onSuccess={handleGoogleLoginSuccess}
              onFailure={handleLoginFailure}
              cookiePolicy={"single_host_origin"}
            />
            <FacebookLogin
              appId="YOUR_FACEBOOK_APP_ID"
              autoLoad={false}
              fields="name,email,picture"
              callback={handleFacebookLoginSuccess}
              cssClass="btn-facebook"
              textButton="Login with Facebook"
            />
          </div> */}
        </form>
        <div className="call-to-action">
          <p>Don't have an account?</p>
          <Link to="/signup" className="btn-secondary">
            Signup
          </Link>
        </div>
        <span className="span_or"><p>or</p></span>
        <div className="login_direct">
          <div className="via_facebook">
            <FaFacebookF /> Login via facebook
          </div>
          <div className="via_google">
            <AiOutlineGoogle /> Login via Google
          </div>
        </div>
      </div>
      <ToastContainer/>
    </section>
  );
};

export default Login;
