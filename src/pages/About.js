import React from 'react'
import '../About.css'
  export default class About extends React.Component {
    constructor(props) {
      super(props);
    }
    render() {
      return(
        <div>
          <h1 id="page-title">About Me</h1>
          <div class="text-block">
            <p class="about-text">Hi there! I am a former pre-veterinarian student who has found their passion for coding. While I graduated with a Bachelor's in Animal Science from Cal Poly San Luis Obispo, I decided to switch career paths to one that is more stimulating for me. The kind of logical thinking and problem solving within the field of computer science better suits my way of thinking. There's nothing quite like having an idea and being able to actualize it yourself. I enjoy tapping into my creative side for my projects. <br /> <br />I want to learn it all, and freeCodeCamp was the first step in my journey that has helped me acquire such knowledge. So far I have completed the following freeCodeCamp certifications (whilst having a blast):
              <ul class="certs">
                <li>Responsive Web Design</li>
                <li>JavaScript Algorithms and Data Structures</li>
                <li>Front End Development Libraries</li>
                <li>Data Analysis with Python</li>
                <li>Scientific Computing with Python</li>   
              </ul>
              From front end to mobile apps to game development, there's so much that appeals to me. I have not yet limited myself to picking just one path. That's why I've also completed the Complete C# Masterclass course from Udemy. This introduced additional important skills like WPF, SQL, and Game Development. I've even dabbled in android studio to get some experience with android apps. I'm excited to share with you some of the projects I have completed thus far!</p>
          </div>
          <div class="image-container">
            <img class="fcc-logo" src="https://d33wubrfki0l68.cloudfront.net/774b60156d8f103170dc66f3ad10310941114653/da262/img/fcc_secondary_large.svg" />
            <img class="udemy-logo" src="https://logosmarken.com/wp-content/uploads/2021/11/Udemy-Logo.png" />
            <img class="android-logo" src="https://developer.android.com/static/images/logos/android.svg" />
          </div>
        </div>
      );
    }
  }
  
