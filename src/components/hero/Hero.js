import * as React from 'react'

const Hero = () => {

  return (
    <section className='hero container'>
      <div className='inner-row'>
        <div className='inner-col'>
          <img className='hero__image' src='/images/hero.png' alt='Women at the PC with icons of JetBrains products'/>
        </div>
        <div className='inner-col'>
          <h1 className="title hero__title">All Products Pack</h1>
          <p className="subtitle hero__subtitle">A complete full-stack <br/> developer toolkit</p>
          <a href='/' className="button hero__button">I want it all</a>
          <p className="text hero__text">An upgrade and switch option available</p>
        </div>
      </div>
    </section>
  )
}


export default Hero
