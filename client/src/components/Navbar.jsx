import React from "react";
import styled from "styled-components";

const NavContainer = styled.div`
  .navbar {
    padding: 0.7rem 3rem;
    text-transform: uppercase;
    font-size: 0.9rem;
    font-weight: 700;
    letter-spacing: 0.1rem;
    background-color: white;
  }

  .navbar-brand img {
    height: 2rem;
    margin-top: 1.3rem;
  }

  .navbar-nav li {
    padding-right: 0.96rem;
  }

  .navbar-nav .nav-link {
    color: black;
    padding-top: 1rem;
  }

  .navbar-nav .nav-link.active,
  .navbar-nav .nav-link:hover {
    color: #f91e53;
  }

  .navbar.solid {
    background: rgba(0, 0, 0, 0.7) !important;
    transition: background-color 1s ease 0s;
  }
`;

function Navbar() {
  return (
    <NavContainer>
      <nav>
        <div class="lp__nav__logo">
          <span>WHISKEY</span>TOUR
        </div>
        <div class="lp__nav__linkSet">
          <a href="/user/:userId" class="lp__nav__link">
            About
          </a>
          <a href="/user" class="lp__nav__link">
            Shop
          </a>
          <a href="#" class="lp__nav__link">
            Explore
          </a>
          <a href="#" class="lp__nav__link">
            Contact
          </a>
        </div>
        <div class="lp__nav__linkSet">
          <a href="/user" class="lp__nav__link">
            Sign Up
          </a>
        </div>
      </nav>
      {/* <nav class="navbar navbar-expand-md fixed-top">
        <button class="navbar-toggler" type="button" data-toggle="collapse"
            data-target="#navbarResponsive">
            <span class="fa fa-bars text-dark"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarResponsive">
            <ul class="navbar-nav m-auto">
                <li class="nav-item">
                    <a class="nav-link active" href="index.html">Home</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="portfolio.html">About</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="pricing.html">gallery</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="pricing.html">WHISKEY</a>
                </li> 
                <li class="nav-item">
                        <a class="nav-link" href="team.html">contact</a>
                    </li>
            </ul>
        </div>
    </nav> */}
    </NavContainer>
  );
}

export default Navbar;
