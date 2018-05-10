import React, { Component, Fragment } from "react";
import { Link, Switch, Route } from "react-router-dom";
import fontawesome from "@fortawesome/fontawesome";
import FontAwesomeIcon from "@fortawesome/react-fontawesome";
import brands from "@fortawesome/fontawesome-free-brands";
import solid from "@fortawesome/fontawesome-free-solid";

class Home extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div id="home" className="content">
        <h1>Carolina Restrepo</h1>
        <h3>Full Stack Web Developer</h3>

        <a href="https://drive.google.com/file/d/10F9IGS6xOD04PjxXovJ3n6uYN8zP0luN/view?usp=sharing" className="button">
            <h4>RESUME</h4>
            <FontAwesomeIcon icon={["fas", "file-alt"]} size="2x" />
        </a>
      </div>
    );
  }
}

export default Home;
