import React from 'react';
import './About.css';
import ME from '../../Assets/Me2.JPG'
import { LiaAwardSolid } from "react-icons/lia";
import { FaUser } from "react-icons/fa";
import { MdFolderShared } from "react-icons/md";



const About = () => {
  return (
    <section id='About'>
      <h5>Get to Know Me</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt='ME'/>
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            
            <article className='about__card'>
            <LiaAwardSolid className='about__icon'/>
              <h5>Experience</h5>
              <small>Fresher</small>
            </article>

            <article className='about__card'>
            <MdFolderShared className='about__icon'/>
              <h5>Projects</h5>
              <small>5</small>
            </article>

            <article className='about__card'>
            <FaUser className='about__icon'/>
              <h5>Clients</h5>
              <small>2</small>
            </article>
          </div>
          <p>Born & Brought Up in New Delhi, India From A Very Young Age I Was Attracted Towards 2 Things Technology and Adventure. While Growing In A Rapidly Developing Tech-Era At The Age Of 13, I Choosed Web Developement As A Career.</p>

          <a href="#Contact" className='btn btn-primary'>Let's Talk</a>
        
        </div>
      </div>
    </section>
  )
}

export default About