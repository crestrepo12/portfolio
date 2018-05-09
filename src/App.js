import React, { Component } from "react";
import { Link, Switch, Route } from "react-router-dom";
import logo from "./logo.svg";
import "./App.css";
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
          <nav id="navbar">
            <Link
              to="/"
              className="tablink"
              style={{ backgroundColor: "rgba(167, 232, 194, 0.397)" }}
            >
              Home
            </Link>
            <Link
              to="/about-me"
              className="tablink"
              style={{ backgroundColor: "rgba(244, 226, 171, 0.397)" }}
            >
              About Me
            </Link>
            <Link
              to="/projects"
              className="tablink"
              style={{ backgroundColor: "#DB99BB" }}
            >
              Projects
            </Link>
            <Link
              to="/skills"
              className="tablink"
              style={{ backgroundColor: "#ADD7F7" }}
            >
              Skills
            </Link>
            <Link
              to="/art-gallery"
              className="tablink"
              style={{ backgroundColor: "#DAFCB0" }}
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
