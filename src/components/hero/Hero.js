import * as React from 'react'

const Hero = () => {

  return (
    <section className='hero container'>
      <div className='inner-row'>
        <div className='inner-col'>
          <picture className='hero__image'>
            <source
              type='image/webp'
              srcSet='/images/hero.webp 1x,
                      /images/hero@2x.webp 2x'
            />
            <source
              type='image/png'
              srcSet='/images/hero.png 1x,
                      /images/hero@2x.png 2x'
            />
            <img
              alt='An abstract woman at the PC with icons of JetBrains products'
              src='/images/hero.png'
              srcSet='/images/hero.png 1x,
                      /images/hero@2x.png 2x'
            />
          </picture>
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
