import React from "react";
export default class ProjectSection extends React.Component { 
    render() {
      return(
        <div class="category">
          <h2 class="section-title">{this.props.category}</h2>
          <div class="projects-container">
            {this.props.projects.map(project => (
              <a href={project.projectUrl}>
                <div class="single-container">
                  <img class="thumbnail" src = {project.imageUrl} alt = {project.name} />
                  <p class="project-name">{project.name}</p>
                 </div>
              </a>
            ))}
          </div>
        </div>
      );
    }
  }