import React, { Component } from "react";

class ArtGallery extends Component {
  render() {
    return (
      <div id="art-gallery" className="content background-image">
        <h1> Art Gallery </h1>
        <div id="art-work-container">
        
          <div className="art-work"><img src="../images/colorful-puzzle.png" alt="1"/></div>
          <div className="art-work"><img src="../images/green_lady.jpg" alt="2"/></div>
          <div className="art-work"><img src="../images/night_time_drive.jpg" alt="3"/></div>
          <div className="art-work"><img src="../images/two_color_portrait.jpg" alt="4"/></div>
          <div className="art-work"><img src="../images/duo_colorpalette.jpg" alt="5"/></div>
          <div className="art-work"><img src="../images/a-look-at-ny.jpg" alt="6"/></div>
          <div className="art-work"><img src="../images/statue-still-life.jpg" alt="7"/></div>
          <div className="art-work"><img src="../images/still-life-drawing.jpg" alt="8"/></div>
          <div className="art-work"><img src="../images/gushing_heart.jpg" alt="9"/></div>
          <div className="art-work"><img src="../images/man-lying-figure-drawing.jpg" alt="10"/></div> 
          <div className="art-work"><img src="../images/monochrome-still-life-blue.jpg" alt="11"/></div>
          <div className="art-work"><img src="../images/monochrome-still-life-grey.jpg" alt="12"/></div>
          <div className="art-work"><img src="../images/night_drive.jpg" alt="13"/></div>
          <div className="art-work"><img src="../images/pointillism-flowers.jpg" alt="14"/></div>
          <div className="art-work"><img src="../images/orange-lady-figure-drawing.jpg" alt="15"/></div>
          <div className="art-work"><img src="../images/palette_knife_plant.jpg" alt="16"/></div>
          <div className="art-work"><img src="../images/shapes.jpg" alt="17"/></div>
       
        </div>
      </div>
    );
  }
}

export default ArtGallery;
