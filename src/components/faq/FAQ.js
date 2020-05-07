import * as React from 'react'
import {ReactComponent as Download} from './svg/download.svg'

const FAQ = () => {

  return (
    <section className='faq container' id='faq'>
      <h2 className='section-title'>FAQ</h2>
      <div className='inner-row'>
        <div className='inner-col'>
          <div className='faq__item'>
            <p className='faq__question'>
              Can I upgrade my existing IntelliJ IDEA, PyCharm, WebStorm or ReSharper Ultimate
              or any other JetBrains IDE license to the All Products Pack?
            </p>
            <p className='faq__answer'>
              Yes, your existing licenses to any JetBrains desktop products make you eligible to purchase
              new All Products Pack subscriptions with an additional discount.
            </p>
          </div>
        </div>
        <div className='inner-col'>
          <div className='faq__item'>
            <p className='faq__question'>How to upgrade to All Products Pack?</p>
            <p className='faq__answer'>
              Yes, your existing licenses to any JetBrains desktop products make you eligible to purchase
              new All Products Pack subscriptions with an additional discount. Yes, your existing licenses
              to any JetBrains desktop products make you eligible to purchase new All Products Pack subscriptions
              with an additional <a href="#">discount</a>.
            </p>
          </div>
        </div>
      </div>
      <div className='inner-row'>
        <div className='inner-col'>
          <img className='faq__image' src='/images/faq.png' alt='Man greetings somebody'/>
        </div>
        <div className='inner-col'>
          <div className='faq__offer'>
            <p className='section-title'>
              Enhance your productivity and speed up coding with JetBrains tools!
            </p>
            <a className='faq__download-link' href='#'>
              <Download/>
              Download the All Products Pack infographics
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FAQ
