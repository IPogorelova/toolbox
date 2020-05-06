import * as React from 'react'
import {ReactComponent as Bug} from './images/bug.svg'
import {ReactComponent as Blog} from './images/jb-blog-orange.svg'
import {ReactComponent as Twitter} from './images/twitter-orange.svg'


const Contacts = () => {
  const [email, setEmail] = React.useState('')

  return (
    <section className='contacts'>
      <div className='container inner-row'>
        <div className='inner-col'>
          <h2 className='contacts__title'>Stay updated</h2>
          <form className='contacts__form'>
            <label className='visually-hidden' htmlFor='email'>Your email</label>
            <input
              id='email'
              className='text-input'
              type='email'
              name='subscription'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder='Your Email'
            />
            <label className='check'>
              <input
                className='check__input'
                type='checkbox'
                name='privacy policy'
              />
              <span className='check__box'>
                <span className='check__tick'/>
              </span>
              By submitting this form I agree to the <a href='#'>JetBrains Privacy Policy</a>
            </label>
            <button
              className='button'
              type='submit'
              onClick={(e) => e.preventDefault()}
            >
              Subscribe
            </button>
          </form>
        </div>
        <div className='inner-col'>
          <h3 className='contacts__subtitle'>Follow us</h3>
          <ul className='contacts__socials'>
            <li className='contacts__social-item'>
              <a href='#' className='contacts__link'>
                <Twitter/>
                @AllProductsPack on Twitter
              </a>
            </li>
            <li className='contacts__social-item'>
              <a href='#' className='contacts__link'>
                <Blog/>
                JetBrains Blog
              </a>
            </li>
            <li className='contacts__social-item'>
              <a href='#' className='contacts__link'>
                <Bug/>
                Bug and Issue Tracker
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}

export default Contacts
