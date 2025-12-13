import React from "react";
import "./Skills.css";
import { FaReact } from "react-icons/fa";
import { FaBootstrap } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiRedux } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { SiTypescript } from "react-icons/si";
const Skills = () => {
  return (
    <div className="skills">
      <div className="skill-title">
       <h1>Skills</h1>
        <div className="skills-list">
          <ul>
            <li>
              <FaReact />
              <p>React JS</p>
            </li>
            <li>
              <FaBootstrap />
              <p>Bootstrap</p>
            </li>
            <li>
              <RiTailwindCssFill />
              <p>Tailwind CSS</p>
            </li>
            <li>
            <SiRedux />
            <p>Redux</p>
            </li>
            <li>
              <SiMongodb />
              <p>MongoDB</p>
            </li>
             <li>
              <FaNodeJs/>
              <p>Node JS</p>
            </li>
            <li>
              <SiTypescript/>
              <p>TypeScript</p>
            </li>
            
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Skills;
