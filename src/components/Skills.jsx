import React, { Component } from "react";
import FontAwesomeIcon from "@fortawesome/react-fontawesome";
import brands from "@fortawesome/fontawesome-free-brands";
import solid from "@fortawesome/fontawesome-free-solid";

class Skills extends Component {
  render() {
    return (
      <div id="skills" className="content">
        <h1>Skills</h1>
        <div id="icon-container">
          <div className="icons">
            <FontAwesomeIcon icon={["fab", "css3-alt"]} size="5x" /> CSS
          </div>
          <div className="icons">
            <FontAwesomeIcon icon={["fab", "html5"]} size="5x" /> HTML
          </div>
          <div className="icons">
            <FontAwesomeIcon icon={["fab", "js-square"]} size="5x" /> JavaScript
          </div>
          <div className="icons">
            <FontAwesomeIcon icon={["fab", "git-square"]} size="5x" /> Git
          </div>
          <div className="icons">
            <FontAwesomeIcon icon={["fab", "github-square"]} size="5x" /> GitHub
          </div>
          <div className="icons">
            <FontAwesomeIcon icon={["fab", "node-js"]} size="5x" /> Node JS
          </div>
          <div className="icons">
            <FontAwesomeIcon icon={["fab", "react"]} size="5x" /> React
          </div>
          <div className="icons">
            <img
              src="images/postgresql-icon.png"
              alt="icon of PostgreSQL"
              style={{ width: "70px" }}
            />{" "}
            PostgreSQL
          </div>
          <div id="credit">
            PostgreSQL icon made from{" "}
            <a href="http://www.onlinewebfonts.com/icon">Icon Fonts</a> is
            licensed by CC BY 3.0
          </div>
        </div>
      </div>
    );
  }
}

export default Skills;
