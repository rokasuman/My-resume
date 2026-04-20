import React from "react";
import "./Project.css";
import calculator from "../../assets/calculator.png";
import movie from "../../assets/movie.png";
import foodie from "../../assets/Foodie.png"
import novahealth from "../../assets/novahealth.png"

const Project = () => {
  return (
    <>
    <div id="project" className="project">
      <div className="project-section">
        <h1>Projects</h1>
        <div className="project-list">
          <ul className="p-list">
            <li className="project-item">
              <img src={novahealth} alt="Calculator Project" />
              
              <p>Nova Healthcare – A full-stack healthcare management system enabling appointment booking, profile management, and email notifications, with dedicated admin and doctor dashboards for managing users, bookings, and earnings.</p>
              <a href="https://capstone-frontend-wvdn.vercel.app/" target="_blank">
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
