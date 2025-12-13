import React from "react";
import "./About.css";
const About = () => {
  return (
    <div className="about">
      <div className="about-title">
        <h1 className="about-me">About Me </h1>
      </div>
      <div className="about-sections">
        <p>
          Hi, I am <strong>Suman Roka</strong>, an avid software Developer currently studing IT
          in Sydney with strong fundation in Computer Science.My expertise lies
          in web development using MERN stack. However, as my major is AI, i am
          equally enthusatic about Machine Learning and Blockchain Technologies.
          I intent to dive deeper into web developmnet and constantly strive to
          intergrate modern technologies into the Web development to enhnace the
          user experince, improvce the performace and ensure reliability.
        </p>
        <p>I am looking Forward to connect with fellow developers and industry professional to exchange idea, share knowledge and embark onan incredile journey of growth and innovation</p>
      </div>
      <div className="education">
        <ul>
            <li>SHEA: Currently Studying</li>
            <li>Dented Code Academy :Traineeship</li>
        </ul>
      </div>
    </div>
  );
};

export default About;
