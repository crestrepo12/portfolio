import React, { Component } from "react";

class Projects extends Component {
  render() {
    return (
      <div id="projects" className="content">
        <h1>Projects </h1>

        <div id="projects-container">
          <div className="project shadow">
            <h2>GearUP</h2>
            <p>
              <a href="https://gearup-management.herokuapp.com/">Live</a> |{" "}
              <a href="https://github.com/crestrepo12/GearUP">Repo</a>
            </p>
            <img
              src="https://i.gyazo.com/eb0ccae7f7ee2b565be709b2e60fc514.png"
              alt="https://gyazo.com/eb0ccae7f7ee2b565be709b2e60fc514"
              className="project-img"
            />
            <p>React, CSS (Flexbox), Semantic UI React, Express, PostgreSQL</p>
          </div>

          <div className="project shadow">
            <h2>Tutelage</h2>
            <p>
              <a href="https://tutelage-connect.herokuapp.com/">Live</a> |{" "}
              <a href="https://github.com/Acostill/Tutelage">Repo</a>
            </p>
            <img
              src="/images/MentorPage.png"
              alt="tutelage search page"
              className="project-img"
            />
            <p>React, CSS, Express, PostgreSQL, BCrypt</p>
          </div>
          <div className="project shadow">
            <h2>[V]ACCESS NYC</h2>
            <p>
              <a href="https://vaccessnyc.netlify.com/">Live</a> |{" "}
              <a href="https://github.com/davidyshin/VACCessNYC">Repo</a>
            </p>
            <img
              src="/images/vaccess.png"
              alt="vaccess home search page"
              className="project-img"
            />
            <p>
              React, CSS, Express, PostgreSQL, BCrypt, React Google Maps, NYC
              Open Data
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Projects;
