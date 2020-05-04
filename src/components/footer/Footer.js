import * as React from 'react'
import logo from '../../images/jetbrains.svg'
import logoMob from '../../images/jetbrains.svg'

const Footer = () => {

  return (
    <footer className='footer'>
      <div className='container'>
        <div className='footer__row'>
          <img
            className='footer__logo'
            srcSet={`${logo} 122w,
                     ${logoMob} 48w`}
            sizes='(max-width: 500px) 48px,
                   122px'
            src=''
            alt='JetBrains logo'
          />
          <div className='footer__col'>
            <span className='footer__subtitle footer__text'>About JetBrains</span>
            <ul className='footer__nav'>
              <li>
                <a href='#' className='footer__link footer__text'>Company</a>
              </li>
              <li>
                <a href='#' className='footer__link footer__text'>Contacts</a>
              </li>
              <li>
                <a href='#' className='footer__link footer__text'>Press & Logos</a>
              </li>
              <li>
                <a href='#' className='footer__link footer__text'>Careers</a>
              </li>
            </ul>
          </div>
          <div className='footer__col'>
            <span className='footer__subtitle footer__text'>Follow JetBrains</span>
            <ul className='footer__socials'>
              <li className='footer__icon'>
                <a href='#' title='JetBrains on Facebook'/>
              </li>
              <li className='footer__icon'>
                <a href='#' title='JetBrains on Twitter'/>
              </li>
              <li className='footer__icon'>
                <a href='#' title='JetBrains on LinkedIn'/>
              </li>
              <li className='footer__icon'>
                <a href='#' title='JetBrains on YouTube'/>
              </li>
              <li className='footer__icon'>
                <a href='#' title='JetBrains blog' />
              </li>
            </ul>
          </div>
        </div>
        <div className='footer__row'>
          <div className='footer__copyright'>
            <span className='footer__text'>2000 - 2017 JetBrains s.r.o. All rights reserved.</span>
            <span className='footer__text'>Developed with drive and IntelliJ IDEA</span>
          </div>
          <div className="footer__privacy">
            <a href="#" className='footer__text'>Privacy & Security</a>
            <a href="#" className='footer__text'>Terms of Use</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
