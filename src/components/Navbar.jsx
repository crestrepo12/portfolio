import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
// import {
//   Accordion,
//   AccordionItem,
//   AccordionItemTitle,
//   AccordionItemBody
// } from "react-accessible-accordion";

class Navbar extends Component {
  constructor() {
    super();

    this.state = {
      buttonActive: false,
      className: ""
    };
  }

  toggleButton = e => {
    console.log("does it work?");
    this.setState({
      buttonActive: !this.state.buttonActive,
      className: this.state.className ? "" : "active"
    });
  };

  desktopScreen = () => {
    return (
      <Fragment>
        <nav id="navbar" className="shadow">
          <Link to="/" className="tablink">
            Home
          </Link>
          <Link to="/about-me" className="tablink">
            About Me
          </Link>
          <Link to="/projects" className="tablink">
            Projects
          </Link>
          <Link to="/skills" className="tablink">
            Skills
          </Link>
          <Link to="/art-gallery" className="tablink">
            Art Gallery
          </Link>
        </nav>
      </Fragment>
    );
  };

  mobileScreen = () => {
    let style;
    if (this.state.buttonActive === true) {
      style = {
        display: "block"
      };
    } else {
      style = {
        display: "none"
      };
    }
    return (
      <Fragment>
        <input
          type="submit"
          value="Menu"
          className={`accordion ${this.state.className}`}
          onClick={this.toggleButton}
        />
        <div id="navbar" className="panel" style={style}>
          <Link to="/" className="tablink">
            Home
          </Link>
          <Link to="/about-me" className="tablink">
            About Me
          </Link>
          <Link to="/projects" className="tablink">
            Projects
          </Link>
          <Link to="/skills" className="tablink">
            Skills
          </Link>
          <Link to="/art-gallery" className="tablink">
            Art Gallery
          </Link>
        </div>
      </Fragment>
    );
  };

  render() {
    console.log(window.innerWidth);
    console.log("state this!", this.state);

    if (window.innerWidth > 767) {
      return this.desktopScreen();
    } else {
      return this.mobileScreen();
    }
  }
}

export default Navbar;
