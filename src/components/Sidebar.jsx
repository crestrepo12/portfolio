import React, { Component } from "react";
import { Link } from "react-router-dom";
import fontawesome from "@fortawesome/fontawesome";
import FontAwesomeIcon from "@fortawesome/react-fontawesome";
import brands from '@fortawesome/fontawesome-free-brands';
import solid from "@fortawesome/fontawesome-free-solid";


class Sidebar extends Component {
  render() {
    return (
      <div id="sidebar" className="shadow">
        <img
          id="picture-self"
          src="https://avatars0.githubusercontent.com/u/32101581?s=460&v=4"
          alt="Carolina facing forward and smiling"
        />
        <div className="contacts">
          <a href="https://www.linkedin.com/in/carolina-restrepo-c4q">
            <FontAwesomeIcon icon={["fab", "linkedin"]} size="3x"/>
          </a>
          <a href="https://github.com/crestrepo12">
          <FontAwesomeIcon icon={["fab", "github"]} size="3x"/></a>
          <a href="mailto:carolinarestrepo@ac.c4q.nyc">
          <FontAwesomeIcon icon={["fas", "envelope"]} size="3x"/></a>
          <a href="https://drive.google.com/file/d/10F9IGS6xOD04PjxXovJ3n6uYN8zP0luN/view?usp=sharing">
          <FontAwesomeIcon icon={["fas", "file-alt"]} size="3x"/></a>
        </div>
        <p> Made by Carolina Restrepo </p>
      </div>
    );
  }
}

export default Sidebar;
