import React from 'react';
import './Contact.css';

import { BiLogoGmail } from "react-icons/bi";
import { FaInstagram } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";

import  { useRef } from 'react';
import emailjs from 'emailjs-com';


const Contact = () => {
  const form =useRef();

const sendEmail = (e) => {
  e.preventDefault();

  emailjs.sendForm('service_9mbdk7v', 'template_hus0q5a', form.current, 'pwIv7HzPHPhWgNe9X')
  e.target.reset()
};

  return (
    <section id='Contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
            <article className="contact__option">
              <BiLogoGmail className='contact__option-icon'/>
              <h4>Email</h4>
              <h5>vinitkumar3372@gmail.com</h5>
              <a href="mailto:vinitkumar3372@gmail.com" target='blank' rel="noreferrer noopener">Connect With Me</a>
            </article>

            <article className="contact__option">
              <FaInstagram className='contact__option-icon'/>
              <h4>Instagram</h4>
              <h5>@Vinit Kumar Pandey</h5>
              <a href="https://www.instagram.com/ig_hunterdiff" target='_blank' rel="noreferrer noopener">Send Message</a>
            </article>

            <article className="contact__option">
              <IoLogoWhatsapp className='contact__option-icon'/>
              <h4>What's App</h4>
              <h5>Let's Talk</h5>
              <a href="https://wa.me/+919582899541" target='_blank' rel="noreferrer noopener">Send Direct Text</a>
            </article>
        </div>
        {/* END OF CONTACT OPTIONS */}
        <form ref={form} onSubmit={sendEmail} >
          <input type="text" name='name' placeholder='Enter Your Full Name' required />
          <input type="email" name='email' placeholder='Enter Your Email' required />
          <textarea name="message" rows="7" placeholder='Wanna Say Something To Me?' required ></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact