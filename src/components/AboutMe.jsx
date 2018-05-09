import React, { Component, Fragment } from "react";

class AboutMe extends Component {
  render() {
    return (
      <div id="about-me" className="tabcontent">
        <h2> About Me </h2>

        <p className="personal-pitch">
          I am a Full Stack Web Developer at C4Q. I’ve worked in the social
          services field for a few years and from there I realized I wanted to
          do more for others. After having multiple discussions with my brothers
          about the tech community, I gave javascript a try. I was intrigued by
          other developers that built platforms to bring people together. I
          began my search to find a school who believed in building an inclusive
          community. From that research, is where I found C4Q. Throughout the
          course I have come to realize how much closer I am to helping others.
          I would like to use these skills to build sites that are more
          inclusive especially towards accessibility and building tools that are
          helpful for daily lives.
        </p>
      </div>
    );
  }
}

export default AboutMe;
