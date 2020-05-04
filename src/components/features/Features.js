import * as React from 'react'

const Feature = ({icon, alt, title, description}) => {
  return (
    <div className='features__item features-item'>
      <img className='features-item__icon' src={`/images/products/${icon}`} alt={alt}/>
      <span className='features-item__title'>{title}</span>
      <p className='features-item__description'>{description}</p>
    </div>
  )
}

const Features = ({features}) => {

  return (
    <section className='features container'>
      <div className='inner-row'>
        <div className='inner-col'>
          <img className='features__image' src='/images/illustration.png' alt='Abstract man near the schedule'/>
        </div>
        <div className='inner-col features__list'>
          {
            features.map((item, i) => <Feature key={`feature-${i}`} icon={item.icon} title={item.title} description={item.description}/> )
          }
        </div>
      </div>
    </section>
  )
}

export default Features
