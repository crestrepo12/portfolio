import React, { Component } from "react";
import { Link, Switch, Route } from "react-router-dom";
import "./App.css";
import "./Media-queries.css";
import Sidebar from "./components/Sidebar";
import Home from "./components/Home";
import AboutMe from "./components/AboutMe";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import ArtGallery from "./components/ArtGallery";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Sidebar />

        <div className="page-container">
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

          <Switch className="routes">
            <Route exact path="/" component={Home} />
            <Route path="/about-me" component={AboutMe} />
            <Route path="/projects" component={Projects} />
            <Route path="/skills" component={Skills} />
            <Route path="/art-gallery" component={ArtGallery} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
