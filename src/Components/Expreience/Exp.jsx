import React from 'react'
import './Exp.css'
import {BsPatchCheckFill} from 'react-icons/bs'

const Exp = () => {
  return (
    <section id='Exp'>
      <h5>Skills I Have</h5>
      <h2>My Technical Skills</h2>

      <div className="container experience__container">
        <div className="experience__frontend">
            <h3>Frontend Development</h3>
            <div className="experience__content">
              <article className='experience__details'>
                <BsPatchCheckFill className='experience__details-icon'/>
                <div>
                <h4>HTML</h4>
                <small className='text-light'>Experienced</small>
                </div>
              </article>

              <article className='experience__details'>
                <BsPatchCheckFill className='experience__details-icon'/>
                <div>
                <h4>CSS</h4>
                <small className='text-light'>Experienced</small>
                </div>
              </article>

              <article className='experience__details'>
                <BsPatchCheckFill className='experience__details-icon'/>
                <div>
                <h4>JavaScript</h4>
                <small className='text-light'>Experienced</small>
                </div>
              </article>

              <article className='experience__details'>
                <BsPatchCheckFill className='experience__details-icon'/>
                <div>
                <h4>ReactJs</h4>
                <small className='text-light'>Experienced</small>
                </div>
              </article>

              <article className='experience__details'>
                <BsPatchCheckFill className='experience__details-icon'/>
                <div>
                <h4>BootStrap</h4>
                <small className='text-light'>Intermediate</small>
                </div>
              </article>
            </div>
        </div>

{/* =================BACK-END DEVELOPMENT=================================== */}

        <div className="experience__backend">
            <h3>Backend Development</h3>
            <div className="experience__content">
              <article className='experience__details'>
                <BsPatchCheckFill className='experience__details-icon'/>
                  <div>
                  <h4>Python</h4>
                  <small className='text-light'>Intermediate</small>
                  </div>
              </article>

              <article className='experience__details'>
                <BsPatchCheckFill className='experience__details-icon'/>
                <div>
                <h4>Django</h4>
                <small className='text-light'>Intermediate</small>
                </div>
              </article>

              <article className='experience__details'>
                <BsPatchCheckFill className='experience__details-icon'/>
                  <div>
                  <h4>Express</h4>
                <small className='text-light'>Beginner</small>
                  </div>
              </article>

              <article className='experience__details'>
                <BsPatchCheckFill className='experience__details-icon'/>
                <div>
                <h4>Node</h4>
                <small className='text-light'>Intermediate</small>
                </div>
              </article>

              <article className='experience__details'>
                <BsPatchCheckFill className='experience__details-icon'/>
                <div>
                <h4>MongoDB</h4>
                <small className='text-light'>Intermediate</small>
                </div>
              </article>

              <article className='experience__details'>
                <BsPatchCheckFill className='experience__details-icon'/>
                <div>
                <h4>MySQL</h4>
                <small className='text-light'>Beginner</small>
                </div>
              </article>
            </div>
          </div>
          
      </div>
    </section>
  )
}

export default Exp