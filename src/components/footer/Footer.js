import * as React from 'react'
import './Footer.scss'

const Footer = () => {

  return (
    <footer className='footer'>
      <div className='footer__row'>
        <img src='' alt='JetBrains logo'/>
        <div className='footer__col'>
          <ul>
            About JetBrains
            <li>
              <a href='#'>Company</a>
            </li>
            <li>
              <a href='#'>Contacts</a>
            </li>
            <li>
              <a href='#'>Press & Logos</a>
            </li>
            <li>
              <a href='#'>Careers</a>
            </li>
          </ul>
        </div>
        <div className='footer__col'>
          <ul>
            Follow JetBrains
            <li>
              <a href='#'>Facebook</a>
            </li>
            <li>
              <a href='#'>Twitter</a>
            </li>
            <li>
              <a href='#'>LinkedIn</a>
            </li>
            <li>
              <a href='#'>YouTube</a>
            </li>
            <li>
              <a href='#'>Blog</a>
            </li>
          </ul>
        </div>
      </div>
      <div className='footer__row'>
        <span>copyright</span>
        <span>developed</span>
        <div className="footer__privacy">
          <a href="#">Privacy & Security</a>
          <a href="#">Terms of Use</a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
