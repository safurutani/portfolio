import React from 'react';
import {Link} from 'react-router-dom';
export default class NavBar extends React.Component {
    render(){
      return(
        <div>
          <div class="outer-border" id="outer-top">
          </div>
          <div class="inner-border" id="inside-top">
          </div>
          <nav id="navbar">
            <ul class="nav-list">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/projects">Projects</Link></li>
              <li><Link to="/about">About Me</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </nav>
          <div class="inner-border" id="inside-bottom">
          </div>
          <div class="outer-border" id="outer-bottom">
          </div>
        </div>
      );
    }
  }