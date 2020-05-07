import * as React from 'react'
import {ReactComponent as Fb} from './svg/fb.svg'
import {ReactComponent as Blog} from './svg/jbblog.svg'
import {ReactComponent as LinkedIn} from './svg/linkedin.svg'
import {ReactComponent as Twitter} from './svg/twitter.svg'
import {ReactComponent as YouTube} from './svg/youtube.svg'

const Footer = () => {

  return (
    <footer className='footer'>
      <div className='container'>
        <div className='footer__row'>
          <img
            className='footer__logo footer__logo_full'
            src='/images/jb.svg'
            alt='JetBrains logo'
          />
          <img
            className='footer__logo footer__logo_mob'
            src='/images/jb-sm.svg'
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
                <a href='#' title='JetBrains on Facebook'>
                  <Fb/>
                </a>
              </li>
              <li className='footer__icon'>
                <a href='#' title='JetBrains on Twitter'>
                  <Twitter/>
                </a>
              </li>
              <li className='footer__icon'>
                <a href='#' title='JetBrains on LinkedIn'>
                  <LinkedIn/>
                </a>
              </li>
              <li className='footer__icon'>
                <a href='#' title='JetBrains on YouTube'>
                  <YouTube/>
                </a>
              </li>
              <li className='footer__icon'>
                <a href='#' title='JetBrains blog'>
                  <Blog/>
                </a>
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
