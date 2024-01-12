import React from "react";
export default class ProjectCard extends React.Component {
    render() {
      return(
        <div id="project-card">
          <a href={this.props.link}>
            <img  class="thumbnail" src={this.props.project} />
          </a>
        </div>
      );
    }
  }