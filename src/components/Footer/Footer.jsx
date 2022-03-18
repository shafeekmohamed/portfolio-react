import React from 'react'
import './Footer.css'
import {FaFacebookF} from 'react-icons/fa'
import {AiOutlineInstagram} from 'react-icons/ai'
import {RiTwitterLine} from 'react-icons/ri'

const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer_logo'></a>
      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">about</a></li>
        <li><a href="#experience">experience</a></li>
        <li><a href="#services">services</a></li>
        <li><a href="#portfolio">portfolio</a></li>
        <li><a href="#testimonials">testimonials</a></li>
        <li><a href="#contact">contact</a></li>
      </ul>

      <div className="footer_socials">
        <a href="https://facebook.com"><FaFacebookF /></a>
        <a href="https://instagram.com"><AiOutlineInstagram /></a>
        <a href="https://twitter.com"><RiTwitterLine /></a>
      </div>

      <div className="footer_copyright">
        <small>&copy; All right reserved</small>
      </div>
    </footer>
  )
}

export default Footer