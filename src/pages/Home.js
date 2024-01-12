import React from 'react';
import NavBar from '../NavBar'
import '../Home.css';
import Tools from '../Components/Tools';
import Name from '../Components/Name';
import Carousel from '../Components/Carousel';

 export default class Home extends React.Component {
    constructor(props) {
      super(props);
      
      this.state = {
        firstIndex: 0,
        secondIndex: 1,
        thirdIndex: 2,
        firstCard: "",
        secondCard: "",
        thirdCard: "",
        firstLink: "",
        secondLink: "",
        thirdLlink: "",
        projectThumbnails: {
          tswiftRanker: './portfolio/images/album ranker.png',
          quoteGenerator: './portfolio/images/quote generator.png',
          calculator: './portfolio/images/calculator.png',
          resinEstimator: './portfolio/images/resin estimator.png',
          lyricApp: './portfolio/images/lyric app.jpg',
          drumMachine: './portfolio/images/drum machine.png',
          timer: './portfolio/images/session break timer.png',
          zigZag: './portfolio/images/skelly zig zag.png',
          fruitSlicer: './portfolio/images/fruit slicer.jpg'
        },
        projectLinks: {
          tswiftRanker: "https://safurutani.github.io/tswift-album-ranker/",
          quoteGenerator: "https://codepen.io/safurutani/full/eYPzjZL",
          calculator: "https://codepen.io/safurutani/full/MWPMrKp",
          resinEstimator: "https://safurutani.github.io/resin-estimator/",
          lyricApp: "https://github.com/safurutani/Favorite-Lyrics-App",
          drumMachine: "https://codepen.io/safurutani/full/NWOwKvR",
          timer: "https://codepen.io/safurutani/full/qBQWNYq",
          zigZag: "https://safurutani.github.io/zig-zag-game/",
          fruitSlicer: "https://safurutani.github.io/fruit-slicer/"
        }
      };
    }
    prevButtonClicked = () => {
        this.setState((prevState) => {
        return {
          firstIndex:
            (prevState.firstIndex - 1 + Object.keys(prevState.projectThumbnails).length) %
            Object.keys(prevState.projectThumbnails).length,
          secondIndex:
            (prevState.secondIndex - 1 + Object.keys(prevState.projectThumbnails).length) %
            Object.keys(prevState.projectThumbnails).length,
          thirdIndex:
            (prevState.thirdIndex - 1 + Object.keys(prevState.projectThumbnails).length) %
            Object.keys(prevState.projectThumbnails).length
        };
      });
      }
    nextButtonClicked = () => {
      this.setState((prevState) => {
        return {
          firstIndex: (prevState.firstIndex + 1) % Object.keys(prevState.projectThumbnails).length,
          secondIndex: (prevState.secondIndex + 1) % Object.keys(prevState.projectThumbnails).length,
          thirdIndex: (prevState.thirdIndex + 1) % Object.keys(prevState.projectThumbnails).length
        };
      });
    }
    render() {
      const { projectThumbnails } = this.state;
      const imageKeys = Object.keys(projectThumbnails);
      const {projectLinks} = this.state;
      const linkKeys = Object.keys(projectLinks);
      var firstIndex = this.state.firstIndex; 
      var key = imageKeys[firstIndex];
      const imageURL = projectThumbnails[key];
      
      return(
        <div>
          <Name />
          <NavBar />
          <Carousel 
            firstCard = {projectThumbnails[imageKeys[this.state.firstIndex]]}
            firstLink = {projectLinks[linkKeys[this.state.firstIndex]]}
            secondCard = {projectThumbnails[imageKeys[this.state.secondIndex]]}
            secondLink = {projectLinks[linkKeys[this.state.secondIndex]]}
            thirdCard = {projectThumbnails[imageKeys[this.state.thirdIndex]]}
            thirdLink = {projectLinks[linkKeys[this.state.thirdIndex]]}
            
            prevButtonClicked={this.prevButtonClicked}
            nextButtonClicked={this.nextButtonClicked}
            /> 
          <Tools />
        </div>
      );
    }
  }
  