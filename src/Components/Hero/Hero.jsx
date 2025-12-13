import React from 'react'
import './Hero.css'
import profile from '../../assets/Profile.JPG'
const Hero = () => {
  return (
    <div className='hero'>
        <img src={profile} alt=''/>
        <h1>I apply coding skills to Find the Solution</h1>
        <p>I am an undergoing IT student passionate about web development and problem-solving. </p>
        <div className="hero-action">
            <div className="hero-connect">Connect With Me</div>
           <div className="hero-resume">My Resume</div>
        </div>

    </div>
  )
}

export default Hero