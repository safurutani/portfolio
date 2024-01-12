import React from "react";
export default class Name extends React.Component {
    render() {
      return(
        <div id="name">
          <div class="outer-border" id="outer-top">
          </div>
          <div class="inner-border" id="inside-top">
          </div>
          <div id="titles">
            <h1 id="sara">Sara Furutani</h1>
            <h2 id="tagline">Software Developer</h2>
          </div>
          <div class="inner-border" id="inside-bottom">
          </div>
          <div class="outer-border" id="outer-bottom">
          </div>
        </div>
      );
    }
  }