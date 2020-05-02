import * as React from 'react'
import './Contacts.scss'

const Contacts = () => {

  return (
    <section className='contacts'>
      <div className='inner-col'>
        <h2>Stay updated</h2>
        <form className='contacts__form'>
          <input type='email'/>
          <input type='checkbox'/>
          <button type='submit'>Subscribe</button>
        </form>
      </div>
      <div className='inner-col'>
        <h3 className='contacts__subtitle'>Follow us</h3>
        <ul className='contacts__socials'>
          <li className='contacts__social-item'>
            <a href='#'></a>
          </li>
          <li className='contacts__social-item'>
            <a href='#'></a>
          </li>
          <li className='contacts__social-item'>
            <a href='#'></a>
          </li>
        </ul>
      </div>
    </section>
  )
}

export default Contacts
