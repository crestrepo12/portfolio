import React, { Component } from "react";

class Projects extends Component {
  render() {
    return (
      <div id="projects" className="content background-image">
        <h1>Projects </h1>
        <div id="projects-container">
          <div className="project shadow">
            <h2>Tutelage</h2>
            <p>
              <a href="https://tutelage-connect.herokuapp.com/">Live</a> |{" "}
              <a href="https://github.com/Acostill/Tutelage">Repo</a>
            </p>
            <img src="/images/MentorPage.png" alt="tutelage search page" className="project-img" />
            <p>React, CSS, HTML, Express, Postgres, BCrypt</p>
          </div>
          <div className="project shadow">
            <h2>[V]ACCESS NYC</h2>
            <p>
              <a href="https://vaccessnyc.netlify.com/">Live</a> |{" "}
              <a href="https://github.com/davidyshin/VACCessNYC">Repo</a>
            </p>
            <img src="/images/vaccess.png" alt="vaccess home search page" className="project-img" />
            <p>
              React, CSS, HTML, Express, Postgres, BCrypt, React Google Maps,
              NYC Open Data
            </p>
          </div>
          {/* <div className="project"><a href=""><img src="" alt=""/></a></div>
          <div className="project"><a href=""><img src="" alt=""/></a></div>
          <div className="project"><a href=""><img src="" alt=""/></a></div> */}
        </div>
      </div>
    );
  }
}

export default Projects;
