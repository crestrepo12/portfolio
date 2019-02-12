import React, { Component} from "react";
import FontAwesomeIcon from "@fortawesome/react-fontawesome";
import resumeLink from "./resumeLink";

class Home extends Component {
  render() {
    return (
      <div id="home" className="content">
        <h1>Carolina Restrepo</h1>
        <h3>Full Stack Web Developer</h3>

        <a href={resumeLink}>
            <h4>RESUME</h4>
            <FontAwesomeIcon icon={["fas", "file-alt"]} size="2x" />
        </a>
      </div>
    );
  }
}

export default Home;
