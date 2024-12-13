import React from 'react';

const Header = () => {
  return (
    <header className="header" data-aos="fade-down" data-aos-duration="1000">
      <a href="#" className="logo">
        <i className="bx bxs-movie"></i>Movies
      </a>
      <div className="bx bx-menu" id="menu-icon"></div>

      <nav>
        <ul className="navbar">
          <li><a href="#home">Home</a></li>
          <li><a href="#movies">Movies</a></li>
          <li><a href="#shows">Shows</a></li>
          <li><a href="#coming">Coming</a></li>
          <li><a href="#newsletter">Newsletter</a></li>
        </ul>
      </nav>
      <a href="#" className="btn">Sign In</a>

      <div id="signin-box" className="signin-box">
        <div className="signin-content">
          <span className="close" id="close-signin">&times;</span>
          <h2>Sign In</h2>
          <form id="signin-form">
            <input type="text" placeholder="User Name" className="input-field" required />
            <i className="bx bx-user icon"></i>
            <input type="password" placeholder="Password" className="input-field" required />
            <i className="bx bx-lock-alt icon"></i>
            <div className="forgot-pass">
              <a href="#">Forgot Password?</a>
            </div>
            <button type="submit" className="btn">Sign In</button>
            <h4>Sign in using</h4>
            <div className="social-icon">
              <a href="google-link"><i className="bx bxl-google"></i></a>
              <a href="facebook-link"><i className="bx bxl-facebook"></i></a>
              <a href="gmail-link"><i className="bx bxl-gmail"></i></a>
            </div>
            <p>OR</p>
            <button type="submit" className="btn2">Sign Up</button>
          </form>
        </div>
      </div>
    </header>
  );
}

export default Header;
