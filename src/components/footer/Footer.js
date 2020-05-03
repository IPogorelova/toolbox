import * as React from 'react'

const Footer = () => {

  return (
    <footer className='footer'>
      <div className="container">
        <div className='footer__row'>
          <img className='footer__logo' src='' alt='JetBrains logo'/>
          <div className='footer__col'>
            <span className='footer__subtitle'>About JetBrains</span>
            <ul className='footer__nav'>
              <li>
                <a href='#' className='footer__link'>Company</a>
              </li>
              <li>
                <a href='#' className='footer__link'>Contacts</a>
              </li>
              <li>
                <a href='#' className='footer__link'>Press & Logos</a>
              </li>
              <li>
                <a href='#' className='footer__link'>Careers</a>
              </li>
            </ul>
          </div>
          <div className='footer__col'>
            <span className='footer__subtitle'>Follow JetBrains</span>
            <ul className='footer__socials'>
              <li>
                <a className='footer__icon' href='#' title='JetBrains on Facebook'/>
              </li>
              <li>
                <a className='footer__icon' href='#' title='JetBrains on Twitter'/>
              </li>
              <li>
                <a className='footer__icon' href='#' title='JetBrains on LinkedIn'/>
              </li>
              <li>
                <a className='footer__icon' href='#' title='JetBrains on YouTube'/>
              </li>
              <li>
                <a className='footer__icon' href='#' title='JetBrains blog'></a>
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
      </div>
    </footer>
  )
}

export default Footer
