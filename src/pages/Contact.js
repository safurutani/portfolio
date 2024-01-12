import React from 'react'
import '../Contact.css'
  export default class Contact extends React.Component {
    constructor(props) {
      super(props);
    }
    render() {
      return(
        <div class="page">
          <h1 id="page-title">Get In Contact</h1>
          <div class="contact-container">
            <img class="gmail-logo" src="https://cdn.iconscout.com/icon/free/png-512/free-gmail-11-226399.png?f=webp&w=256" />
            <p>sarafurutani@gmail.com</p>
          </div>
          <div class="contact-container">
            <img class="linkedin-logo" src="https://content.linkedin.com/content/dam/me/news/en-us/icons/Social_Icons_linkedin.svg.original.svg" /><p><a href="https://www.linkedin.com/in/sarafurutani/">Sara Furutani</a></p>
          </div>
          <div class="contact-container">
            <img class="github-logo" src="https://cdn.iconscout.com/icon/free/png-512/free-github-1521500-1288242.png?f=webp&w=256" />
            <p><a href="https://www.linkedin.com/in/sarafurutani/">@safurutani</a></p>
          </div>
          <div class="contact-container">
            <img class="codepen-logo" src="https://cdn.iconscout.com/icon/free/png-512/free-codepen-3-434013.png?f=webp&w=256" />
            <p>
              <a href="https://codepen.io/safurutani">@safurutani</a>
            </p>
          </div>
          
          <div class="contact-container">
            <img class="-logo" src="" />
          </div>
        </div>
      );
    }
  }
