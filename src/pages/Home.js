import React from "react";
// import LinkedInIcon from "@material-ui/icons/LinkedIn";
// import EmailIcon from "@material-ui/icons/Email";
// import GithubIcon from "@material-ui/icons/GitHub";
import "../styles/Home.css";

function Home() {
  return (
    <div className="home">
      <div className="about">
        <h2> Hi, My Name is Siddharth</h2>
        <div className="prompt">
          <p>I'm a Web Developer with an inclination towards Visual Design and an aspiring Musician.</p>
          {/* <LinkedInIcon />
          <EmailIcon />
          <GithubIcon /> */}
        </div>
      </div>
      <div className="skills">
        <h1> Skills</h1>
        <ol className="list">
          <li className="item">
            <h2> Front-End</h2>
            <span>
              ReactJS, Redux, HTML, CSS, NPM,
             BootStrap, MaterialUI, Yarn, TailwindCSS, StyledComponents

            </span>
          </li>
          <li className="item">
            <h2>Back-End</h2>
            <span>
             NodeJS, ExpressJS, JSONServer,
              MySQL, MongoDB, DigitalOcean

            </span>
          </li>
          <li className="item">
            <h2>Languages</h2>
            <span>JavaScript, Python, C, C++, TypeScript</span>
          </li>
          <li className="item">
            <h2>Tools</h2>
            <span>
             VSCode , Linux , Swagger , PostMan , Figma , Git
            </span>
          </li>

        </ol>
      </div>
    </div>
  );
}

export default Home;
