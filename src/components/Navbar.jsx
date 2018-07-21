import React, { Component, Fragment } from "react";
import { Link, Switch, Route } from "react-router-dom";

class Navbar extends Component {
  render() {
    return (
      <Fragment>
        <nav id="navbar" className="shadow">
            <Link
              to="/"
              className="tablink"
            >
              Home
            </Link>
            <Link
              to="/about-me"
              className="tablink"
            >
              About Me
            </Link>
            <Link
              to="/projects"
              className="tablink"
            >
              Projects
            </Link>
            <Link
              to="/skills"
              className="tablink"
            >
              Skills
            </Link>
            <Link
              to="/art-gallery"
              className="tablink"
            >
              Art Gallery
            </Link>
          </nav>
      </Fragment>
    );
  }
}

export default Navbar;