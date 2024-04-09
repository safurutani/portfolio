import React from 'react'
import '../Projects.css'
import ProjectSection from '../Components/ProjectSection';
//10 projects
const websites = [
  { id: 0, category: 'Websites', name: 'Taylor Swift Album Ranker', imageUrl: './images/album ranker.png', projectUrl: "https://safurutani.github.io/tswift-album-ranker/"},
  { id: 1, category: 'Websites', name: 'Spongebob Quote Generator', imageUrl: './images/quote generator.png', projectUrl: "https://codepen.io/safurutani/full/eYPzjZL" },
  { id: 2, category: 'Websites', name: 'Javascript Calculator', imageUrl: './images/calculator.png', projectUrl: "https://codepen.io/safurutani/full/MWPMrKp" },
  { id: 3, category: 'Websites', name: 'Genshin Impact Resin Estimator', imageUrl: './images/resin estimator.png', projectUrl: "https://safurutani.github.io/react-resin-estimator/" },
  { id: 5, category: 'Websites', name: 'Drum Machine', imageUrl: './images/drum machine.png', projectUrl: "https://codepen.io/safurutani/full/NWOwKvR" },
  { id: 6, category: 'Websites', name: 'Session/Break Timer', imageUrl: './images/session break timer.png', projectUrl: "https://codepen.io/safurutani/full/qBQWNYq" },
  { id: 9, category: 'Websites', name: 'Pokemon Lookup Proxy', imageUrl: './images/pokemon lookup.png', projectUrl: "https://codepen.io/safurutani/full/zYbZZaZ" }
];
const mobileApps = [
  { id: 4, category: 'Mobile Apps', name: 'Favorite Lyric App', imageUrl: './images/lyric app.jpg', projectUrl: "https://github.com/safurutani/Favorite-Lyrics-App" },
  { id: 10, category: 'Mobile Apps', name: 'WordSmith', imageUrl: './images/gamescreen.jpg', projectUrl: "https://github.com/safurutani/wordsmith"}
];
const unityGames = [
  { id: 7, category: 'Unity', name: 'Fruit Slicer Game', imageUrl: './images/fruit slicer.jpg', projectUrl: "https://safurutani.github.io/fruit-slicer/" },
  { id: 8, category: 'Unity', name: 'Zig Zag Game', imageUrl: './images/skelly zig zag.png', projectUrl: "https://safurutani.github.io/zig-zag-game/" }
];
  export default class Projects extends React.Component {
    constructor(props) {
      super(props);
      
    }
    render() {
      return(
        <div>
          <h1 id="page-title">Projects</h1>
          <ProjectSection  category="Websites" projects = {websites} />
          <ProjectSection  category="Unity Games" projects = {unityGames} />
          <ProjectSection  category = "Mobile Apps" projects = {mobileApps} />
        </div>
      );
    }
  }
