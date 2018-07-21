import React, { Component } from "react";
import { Link, Switch, Route } from "react-router-dom";
import "./App.css";
import "./Media-queries.css";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
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
          <Navbar />

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
