import React from "react";
import { NavLink, Link } from 'react-router-dom';

export const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          Chatbot 
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink  className="nav-link" aria-current="page" to="/">
                ChatBot
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/imageGeneration">
                Image Generation
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
