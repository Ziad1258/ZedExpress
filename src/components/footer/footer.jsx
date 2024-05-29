import React from 'react'
import { Link } from 'react-router-dom';
import logoImg from '../../assets/logo.png';
import instaIcon from '../../assets/instagram_icon.png';
import whatsappIcon from '../../assets/whatsapp_icon.png'; 
import pintrestIcon from '../../assets/pintester_icon.png'; 

import './footer.css'




function Footer() {
  return (
    <footer>
        <Link to='/' className='shopper-link' >
          <img src={logoImg} alt="" />
          <h1 className='logo-tittle'>Shopper</h1>
        </Link>
      <div className="pages-links">
        <ul className='pages-list'>
          <li>
            <Link to='/'>Company</Link>
          </li>
          <li>
            <Link to='/'>Products</Link>
          </li>
          <li>
            <Link to='/'>Offices</Link>
          </li>
          <li>
            <Link to='/'>About</Link>
          </li>
          <li>
            <Link to='/'>Contact</Link>
          </li>
          
        </ul>
      </div>
      <div className="social-media-icons">
        <ul className="social-media-list">
          <li className="insta">
            <Link to='/'>
                <img src={instaIcon} alt="" />
            </Link>
          </li>
          <li className="whatsup">
            <Link to='/'>
                <img src={whatsappIcon} alt="" />
            </Link>
          </li>
          <li className="insta">
            <Link to='/'>
                <img src={pintrestIcon} alt="" />
            </Link>
          </li>
        </ul>
      </div>
    </footer>
  )
}

export default Footer