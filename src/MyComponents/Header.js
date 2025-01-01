import React from "react";
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";

export default function Header(props) {

  let logoStyles = {
    fontFamily: '"Dancing Script", serif',
    fontWeight: 'bold',
    fontSize: '2.5rem',
    fontSize: '40px'
  }
    
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/Listify">
          <h2 style={logoStyles}>{props.title}</h2>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarTogglerDemo02"
          aria-controls="navbarTogglerDemo02"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/Listify">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/About">
                About
              </Link>
            </li>
          </ul>
          {props.searchBar ? <form className="d-flex">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-success" type="submit">
              Search
            </button>
          </form> : ""}
        </div>
      </div>
    </nav>
  );
}

Header.propTypes = {
    title : PropTypes.string,
    searchBar : PropTypes.bool.isRequired
}
