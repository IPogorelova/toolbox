import * as React from 'react'

const Feature = ({icon, alt, title, description}) => {
  return (
    <div className='features__item features-item'>
      <img className='features-item__icon' src={`/images/features/${icon}`} alt={alt}/>
      <span className='features-item__title'>{title}</span>
      <p className='features-item__description'>{description}</p>
    </div>
  )
}

const Features = ({features}) => {

  return (
    <section className='features container' id='overview'>
      <div className='inner-row'>
        <div className='inner-col'>
          <picture className='features__image'>
            <source
              type='image/webp'
              srcSet='/images/features.webp 1x,
                      /images/features@2x.webp 2x'
            />
            <source
              type='image/png'
              srcSet='/images/features.png 1x,
                      /images/features@2x.png 2x'
            />
            <img
              alt='An abstract man near the schedule'
              src='/images/features.png'
              srcSet='/images/features.png 1x,
                      /images/features@2x.png 2x'
            />
          </picture>
        </div>
        <div className='inner-col features__list'>
          {
            features.map((item, i) => <Feature key={`feature-${i}`} icon={item.icon} title={item.title} description={item.description} alt={item.alt}/> )
          }
        </div>
      </div>
    </section>
  )
}

export default Features
