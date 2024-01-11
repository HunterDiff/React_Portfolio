import React from 'react'
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";



const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href="http://www.linkedin.com/in/vinit3372" target="_blank" rel="noreferrer"><BsLinkedin/></a>
        <a href="https://github.com/HunterDiff" target="_blank" rel="noreferrer"><FaGithub/></a>
        <a href="https://www.instagram.com/ig_hunterdiff" target="_blank" rel="noreferrer"><FaInstagram/></a>
    </div>
  )
}

export default HeaderSocials