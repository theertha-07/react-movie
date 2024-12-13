import { Link } from "react-router-dom"
import React from 'react'
// import './Home.css'
import Poster from '../Poster/Poster'
import Header from "../../components/Header"
import Slider from "../../components/Slider"




function Home() {
  return (
    // <div>
    //    {/* <!-- Navigation Bar --> */}
    // <header class="header" data-aos="fade-down" data-aos-duration="1000">
    //     <a href="#" class="logo">
    //         <i class='bx bxs-movie'></i>Movies
    //     </a>
    //     <div class="bx bx-menu" id="menu-icon"></div>
    // {/* <!--menu--> */}
    // <nav>
    // <ul class="navbar">
    //     <li><Link to={'/home'}>Home</Link></li>
    //     <li><Link to={'/movies'}>Movies</Link></li>
    //     <li><Link to={'/shows'}>Shows</Link></li>
    //     <li><Link to={'/coming'}>Coming</Link></li>
    //     <li><Link to={'/newsletter'}>Newsletter</Link></li>
        
    // </ul>
    // </nav>
    // <Link to="signIn" class="btn">Sign In</Link>
    // {/* <!-- Sign In Box --> */}
    // {/* <div id="signin-box" class="signin-box">
    //     <div class="signin-content">
    //         <span class="close" id="close-signin">&times;</span>
    //         <h2>Sign In</h2>
    //         <form id="signin-form">
    //             <input type="username" placeholder="User Name" class="input-field" required>
    //             <i class="bx bx-user icon"></i>
    //             <input type="password" placeholder="Password" class="input-field" required>
    //             <i class="bx bx-lock-alt icon"></i>
    //             <div class="forgot-pass">
    //                 <a href="#">Forgot Password?</a>
    //             </div>
    //             <button type="submit" class="btn">Sign In</button>
    //             <h4>Sign in using</h4>
    //             <div class="social-icon">
    //                 <a href="google-link"><i class='bx bxl-google'></i></a>
    //                 <a href="facebook-link"><i class='bx bxl-facebook'></i></a>
    //                 <a href="gmail-link"><i class='bx bxl-gmail'></i></a>
    //             </div>
    //             <p>OR</p>
    //             <button type="submit" class="btn2">Sign Up</button>
    //         </form>
    //     </div>
    // </div> */}
    
    // </header>

    // <Poster/>
    // </div>

    <>
<Header/>
<Slider/>

    </>
  )
}

export default Home
