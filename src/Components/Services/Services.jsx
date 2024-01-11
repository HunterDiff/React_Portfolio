import React from 'react'
import './Services.css'
import { IoIosCheckmark } from "react-icons/io";


const Services = () => {
  return (
    <section id='Services'>
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className="container services__container">
        <article className='service'>
          <div className="service__head">
            <h3>UI/UX Design</h3>
          </div>
          <ul className='service__list'>
            <li> <IoIosCheckmark className='service__list-icon'/>
            <p>Creating UI/UX Designs Using Figma.</p>
            </li>
          </ul>

          <ul className='service__list'>
            <li> <IoIosCheckmark className='service__list-icon'/>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>
          </ul>

          <ul className='service__list'>
            <li> <IoIosCheckmark className='service__list-icon'/>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>
          </ul>

          <ul className='service__list'>
            <li> <IoIosCheckmark className='service__list-icon'/>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>
          </ul>

          <ul className='service__list'>
            <li> <IoIosCheckmark className='service__list-icon'/>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>
          </ul>
        </article>
        {/*=============== END OF UI/UX===================== */}
        <article className='service'>
          <div className="service__head">
            <h3>Front End Web Development</h3>
          </div>
          <ul className='service__list'>
            <li> <IoIosCheckmark className='service__list-icon'/>
            <p>Creation Of Webpages Using HTML & CSS.</p>
            </li>
          </ul>

          <ul className='service__list'>
            <li> <IoIosCheckmark className='service__list-icon'/>
            <p>Creation Of Functional & Responsive Website Using HTML/CSS</p>
            </li>
          </ul>

          <ul className='service__list'>
            <li> <IoIosCheckmark className='service__list-icon'/>
            <p>Creation Of Fully  Functional & Responsive Apps Using React & JavaScript</p>
            </li>
          </ul>
        </article>
        {/*==================== END OF WEB DEVELOPMENT =========================*/}
        <article className='service'>
          <div className="service__head">
            <h3>Backend Web Development</h3>
          </div>
          <ul className='service__list'>
            <li> <IoIosCheckmark className='service__list-icon'/>
            <p></p>
            </li>
          </ul>

          <ul className='service__list'>
            <li> <IoIosCheckmark className='service__list-icon'/>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>
          </ul>

          <ul className='service__list'>
            <li> <IoIosCheckmark className='service__list-icon'/>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>
          </ul>

          <ul className='service__list'>
            <li> <IoIosCheckmark className='service__list-icon'/>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>
          </ul>

          <ul className='service__list'>
            <li> <IoIosCheckmark className='service__list-icon'/>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>
          </ul>
        </article>
        {/*================ END OF CONTENT CREATION ======================*/}
      </div>
    </section>
  )
}

export default Services