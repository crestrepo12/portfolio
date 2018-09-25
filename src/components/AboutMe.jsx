import React, { Component } from "react";

class AboutMe extends Component {
  render() {
    return (
      <div id="about-me" className="content">
        <h1> About Me </h1>

        <p className="personal-pitch">
          I am a Full Stack Web Developer graduate from Pursuit (formerly C4Q). I
          started my career in the social services field. From that experience
          realized I wanted to do more for others especially on a larger scale.
          I worked with people with cognitive and developmental disabilities who
          were learning to communicate more effectively with others through apps
          using devices like iPads. That is where my spark for web development
          and tech accessibility ignited. When I went to my first tech
          conference in NY, I was fascinated by other developers that built
          platforms to bring people together. Throughout my Full Stack Web
          Development Fellowship, I have come to realize how much closer I am to
          helping others. I would like to use these skills to build tools that
          are helpful and meaningful.
        </p>
      </div>
    );
  }
}

export default AboutMe;
