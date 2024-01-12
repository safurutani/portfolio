import React from "react";
import ProjectCard from "./ProjectCard";
export default class Carousel extends React.Component {
    render() {
      return(
        <div id="thumbnail-viewer">
          <div id="carousel">  
            <div class="button-container left-button">
              <img id="prev-button" onClick={this.props.prevButtonClicked} class="left-arrow arrow" src="https://i.imgur.com/szFz1cq.png" />
            </div>
            <div id="cards">
              <div id="first-card">
                <ProjectCard project={this.props.firstCard} link={this.props.firstLink} />
              </div>
              <div id="second-card">
                <ProjectCard project={this.props.secondCard} link={this.props.secondLink} />
              </div>
              <div id="third-card">
                <ProjectCard project={this.props.thirdCard} link={this.props.thirdLink} />   
              </div>
            </div>
            <div class="button-container right-button">
              <img id="next-button" class="right-arrow arrow" src="https://i.imgur.com/szFz1cq.png" onClick={this.props.nextButtonClicked} />
            </div>
          </div>
        </div>
      );
    }
  }