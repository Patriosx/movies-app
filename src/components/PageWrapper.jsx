/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import SearchMovie from "./SearchMovie";

const PageWrapper = (props) => {
  return (
    <div>
      {/* // <!--preloading--> */}
      <div id="preloader">
        <img
          className="logo"
          src="images/logo1.png"
          alt=""
          width="119"
          height="58"
        />
        <div id="status">
          <span></span>
          <span></span>
        </div>
      </div>
      {/* <!--end of preloading--> */}
      {/* <!--login form popup--> */}
      <div className="login-wrapper" id="login-content">
        <div className="login-content">
          <a href="#" className="close">
            x
          </a>
          <h3>Login</h3>
          <form method="post" action="#">
            <div className="row">
              <label htmlFor="username">
                Username:
                <input
                  type="text"
                  name="username"
                  id="username"
                  placeholder="Hugh Jackman"
                  pattern="^[a-zA-Z][a-zA-Z0-9-_\.]{8,20}$"
                  required="required"
                />
              </label>
            </div>

            <div className="row">
              <label htmlFor="password">
                Password:
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="******"
                  pattern="(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$"
                  required="required"
                />
              </label>
            </div>
            <div className="row">
              <div className="remember">
                <div>
                  <input type="checkbox" name="remember" value="Remember me" />
                  <span>Remember me</span>
                </div>
                <a href="#">Forget password ?</a>
              </div>
            </div>
            <div className="row">
              <button type="submit">Login</button>
            </div>
          </form>
          <div className="row">
            <p>Or via social</p>
            <div className="social-btn-2">
              <a className="fb" href="#">
                <i className="ion-social-facebook"></i>Facebook
              </a>
              <a className="tw" href="#">
                <i className="ion-social-twitter"></i>twitter
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* <!--end of login form popup--> */}
      {/* <!--signup form popup--> */}
      <div className="login-wrapper" id="signup-content">
        <div className="login-content">
          <a href="#" className="close">
            x
          </a>
          <h3>sign up</h3>
          <form method="post" action="#">
            <div className="row">
              <label htmlFor="username-2">
                Username:
                <input
                  type="text"
                  name="username"
                  id="username-2"
                  placeholder="Hugh Jackman"
                  pattern="^[a-zA-Z][a-zA-Z0-9-_\.]{8,20}$"
                  required="required"
                />
              </label>
            </div>

            <div className="row">
              <label htmlFor="email-2">
                your email:
                <input
                  type="password"
                  name="email"
                  id="email-2"
                  placeholder=""
                  pattern="(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$"
                  required="required"
                />
              </label>
            </div>
            <div className="row">
              <label htmlFor="password-2">
                Password:
                <input
                  type="password"
                  name="password"
                  id="password-2"
                  placeholder=""
                  pattern="(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$"
                  required="required"
                />
              </label>
            </div>
            <div className="row">
              <label htmlFor="repassword-2">
                re-type Password:
                <input
                  type="password"
                  name="password"
                  id="repassword-2"
                  placeholder=""
                  pattern="(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$"
                  required="required"
                />
              </label>
            </div>
            <div className="row">
              <button type="submit">sign up</button>
            </div>
          </form>
        </div>
      </div>
      {/* <!--end of signup form popup--> */}

      {/* <!-- BEGIN | Header --> */}
      <header className="ht-header">
        <div className="container">
          <nav className="navbar navbar-default navbar-custom">
            {/* <!-- Brand and toggle get grouped for better mobile display --> */}
            <div className="navbar-header logo">
              <div
                className="navbar-toggle"
                data-toggle="collapse"
                data-target="#bs-example-navbar-collapse-1"
              >
                <span className="sr-only">Toggle navigation</span>
                <div id="nav-icon1">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </div>
              <a href="index-2.html">
                <img
                  className="logo"
                  src="images/logo1.png"
                  alt=""
                  width="119"
                  height="58"
                />
              </a>
            </div>
            {/* <!-- Collect the nav links, forms, and other content for toggling --> */}

            <div
              className="collapse navbar-collapse flex-parent"
              id="bs-example-navbar-collapse-1"
            >
              <ul className="nav navbar-nav flex-child-menu menu-left">
                <li className="hidden">
                  <a href="#page-top"></a>
                </li>
                <li className="dropdown first">
                  <a href="/" className="btn btn-default">
                    Home
                  </a>
                </li>
                <li className="dropdown first">
                  <a href="/blog" className="btn btn-default">
                    blog
                  </a>
                </li>
              </ul>
            </div>
            {/* <!-- /.navbar-collapse --> */}
          </nav>

          {/* <!-- top search form --> */}
          <div className="top-search">
            <select>
              <option value="united">TV show</option>
              <option value="saab">Others</option>
            </select>
            <input
              type="text"
              placeholder="Search for a movie, TV Show or celebrity that you are looking for"
            />
          </div>
        </div>
      </header>
      {/* <!-- END | Header --> */}

      <div className="hero common-hero">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="hero-ct">
                <h1>{props.title}</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="page-single movie_list">
        <div className="container">
          <div className="row ipad-width2">
            {/********  Movies ********/}
            {props.children}
            {/********  Movies ********/}
          </div>
        </div>
      </div>
      {/* <!-- footer section--> */}
      <footer className="ht-footer">
        <div className="container">
          <div className="flex-parent-ft">
            <div className="flex-child-ft item1">
              <a href="index-2.html">
                <img className="logo" src="images/logo1.png" alt="" />
              </a>
            </div>
            <div className="flex-child-ft item2">
              <h4>Resources</h4>
              <ul>
                <li>
                  <a href="#">About</a>
                </li>
                <li>
                  <a href="#">Blockbuster</a>
                </li>
                <li>
                  <a href="#">Contact Us</a>
                </li>
              </ul>
            </div>
            <div className="flex-child-ft item3">
              <h4>Legal</h4>
              <ul>
                <li>
                  <a href="#">Terms of Use</a>
                </li>
                <li>
                  <a href="#">Privacy Policy</a>
                </li>
                <li>
                  <a href="#">Security</a>
                </li>
              </ul>
            </div>
            <div className="flex-child-ft item4">
              <h4>Account</h4>
              <ul>
                <li>
                  <a href="#">My Account</a>
                </li>
                <li>
                  <a href="#">Watchlist</a>
                </li>
                <li>
                  <a href="#">Collections</a>
                </li>
                <li>
                  <a href="#">User Guide</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="ft-copyright">
          <div className="backtotop">
            <p>
              <a href="#" id="back-to-top">
                Back to top <i className="ion-ios-arrow-thin-up"></i>
              </a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default PageWrapper;
