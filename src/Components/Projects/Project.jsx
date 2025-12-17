import React from "react";
import "./Project.css";
import calculator from "../../assets/calculator.png";
import movie from "../../assets/movie.png";
import foodie from "../../assets/Foodie.png"

const Project = () => {
  return (
    <>
    <div id="project" className="project">
      <div className="project-section">
        <h1>Projects</h1>
        <div className="project-list">
          <ul className="p-list">
            <li className="project-item">
              <img src={calculator} alt="Calculator Project" />
              <p>Simple calculator made using HTML, CSS, and JS</p>
              <a href="https://rokasuman.github.io/Calculator/" target="_blank">
                Go Live
              </a>
            </li>
            <li className="project-item">
              <img src={movie} alt="Movie Project" />
              <p>
                Movie World: Made using React JS and Movie API to fetch data.
              </p>
              <a href="https://movie-world-woad.vercel.app/" target="_blank">
                View Project
              </a>
            </li>
            <li className="project-item">
              <img src={foodie} alt="Resturant-Project" />
              <p>
                A modern restaurant frontend page showcasing menu items, ordering features, and restaurant information. Made by using reactJS.
              </p>
              <a href="https://foodie-frontend-xi.vercel.app" target="_blank">
                View Project
              </a>
            </li>
          </ul>
        </div>
      </div>
     {/* <button className="view-more">View More</button>*/}
    </div>
    
    </>
  );
};

export default Project;
