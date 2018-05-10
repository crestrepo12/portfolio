import React, { Component, Fragment } from "react";

class ArtGallery extends Component {
  render() {
    return (
      <div id="art-gallery" className="content">
        <h1> Art Gallery </h1>
        <div id="art-work-container">
          <div className="art-work"><img src="../images/colorful-puzzle.jpg" alt="1"/></div>
          <div className="art-work"><img src="../images/green_lady.jpg" alt="2"/></div>
          <div className="art-work"><img src="../images/night_drive.jpg" alt="3"/></div>
          <div className="art-work"><img src="../images/two_color_portrait.jpg" alt="4"/></div>
          {/* <div className="art-work"><img src="" alt=""/></div>
          <div className="art-work"><img src="" alt=""/></div>
          <div className="art-work"><img src="" alt=""/></div>
          <div className="art-work"><img src="" alt=""/></div>
          <div className="art-work"><img src="" alt=""/></div>
          <div className="art-work"><img src="" alt=""/></div> */}
        </div>
      </div>
    );
  }
}

export default ArtGallery;
