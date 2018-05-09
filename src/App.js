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

  // handleClick = e => {
  //   // e.preventDefault();
  //   var style;
  //   console.log("target", e.target.name)
  //   if(e.target.name === "Home") {
  //     return style = {background: "#555"} ? style ={background: "green"} : style = {background: "#555"} ;
  //   } else if (e.target.name === "about-me") {
  //     return style = {background: "aqua"};
  //   } else {
  //     return style = {background: "#555"}
  //   }

  // }

  render() {
    const { handleClick } = this;
    let style;
    return (
      <div className="App">
        <Sidebar />

        <div className="page-container">
          <nav id="navbar">
            <Link to="/" className="tablink" name="home" onClick={(e) => {
          
              style = {backgroundColor: "green"};
            }} > Home </Link>
            <Link to="/about-me" className="tablink" name="about-me" onClick={ handleClick }>About Me</Link>
            <Link to="/projects" className="tablink" onClick={ handleClick }> Projects </Link>
            <Link to="/skills" className="tablink" onClick={ handleClick }> Skills</Link>
            <Link to="/art-gallery" className="tablink" onClick={ handleClick }> Art Gallery</Link>
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
