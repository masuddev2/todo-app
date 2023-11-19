import React from "react";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const { pathname } = useLocation();
  console.log(pathname);

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <Link className="navbar-brand" to="/">
          Navbar
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link
                className={`nav-link ${pathname === "/" && "text-primary"}`}
                to="/"
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={`nav-link ${
                  pathname === "/about" && "text-primary"
                }`}
                to="/about"
              >
                About
              </Link>
            </li>
            <li className="nav-item dropdown">
              <Link
                className={`nav-link ${
                  pathname === "/counter" && "text-primary"
                }`}
                to="/counter"
              >
                Counter
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={`nav-link ${pathname === "/todo" && "text-primary"}`}
                to="/todo"
              >
                Todo App
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={`nav-link ${
                  pathname === "/service" && "text-primary"
                }`}
                to="/service"
              >
                Service
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={`nav-link ${
                  pathname === "/contacts" && "text-primary"
                }`}
                to="/contacts"
              >
                Contacts
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={`nav-link ${
                  pathname === "/features" && "text-primary"
                }`}
                to="/features"
              >
                Features
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;