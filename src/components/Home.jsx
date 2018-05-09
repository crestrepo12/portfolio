import React, { Component, Fragment } from "react";
import { Link, Switch, Route } from "react-router-dom";
import AboutMe from "./AboutMe";

class Home extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div id="home" className="content">
        
          <h1>Carolina Restrepo</h1>
          <h3>Full Stack Web Developer</h3>

      </div>
    );
  }
}

export default Home;
