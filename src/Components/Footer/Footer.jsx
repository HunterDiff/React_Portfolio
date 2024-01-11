import React from 'react'
import './Footer.css'

import { FaSquareFacebook } from "react-icons/fa6";
import { GrInstagram } from "react-icons/gr";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";




const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'>#HunterDiff</a>

      <ul className='permalinks'>
          <li><a href="#">Home</a></li>
          <li><a href="#About">About</a></li>
          <li><a href="#Exp">Expreience</a></li>
          <li><a href="#Services">Services</a></li>
          <li><a href="#Folio">PortFolio</a></li>
          <li><a href="#Monial">Testimonials</a></li>
          <li><a href="#Contact">Contact Me</a></li>
      </ul>

      <div className="footer__socials">
        <a href="https://www.facebook.com/profile.php?id=100010930478183" target='_blank' rel="noreferrer noopener"><FaSquareFacebook/></a>
        <a href="https://www.instagram.com/ig_hunterdiff" target='_blank' rel="noreferrer noopener"><GrInstagram/></a>
        <a href="http://www.linkedin.com/in/vinit3372" target='_blank' rel="noreferrer noopener"><FaLinkedinIn/></a>
        <a href="https://www.twitter.com/" target='_blank' rel="noreferrer noopener"><FaTwitter/></a>
      </div>
      <div className="footer__copyright">
        <small>&copy; Vinit Kumar Pandey. All Rights Reserved.</small>
      </div>
    </footer>
  )
}

export default Footer