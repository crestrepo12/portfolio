import React, { Component} from "react";
import FontAwesomeIcon from "@fortawesome/react-fontawesome";

class Home extends Component {
  render() {
    return (
      <div id="home" className="content background-image">
        <h1>Carolina Restrepo</h1>
        <h3>Front-End Web Developer</h3>

        <a href="https://drive.google.com/file/d/10F9IGS6xOD04PjxXovJ3n6uYN8zP0luN/view?usp=sharing" className="button">
            <h4>RESUME</h4>
            <FontAwesomeIcon icon={["fas", "file-alt"]} size="2x" />
        </a>
      </div>
    );
  }
}

export default Home;
