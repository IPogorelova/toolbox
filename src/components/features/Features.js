import * as React from 'react'
import './Features.scss'

const Feature = ({icon, alt, title, description}) => {
  return (
    <div className='features__item features-item'>
      <img className='features-item__icon' src={icon} alt={alt}/>
      <span className='features-item__title'>{title}</span>
      <p className='features-item__description'>{description}</p>
    </div>
  )
}

const Features = ({features}) => {

  return (
    <section className='features'>
      <div className='inner-col'>
        <img src='' alt='Abstract man with the desk'/>
      </div>
      <div className='inner-col features__list'>
        {
          features.map((i, item) => <Feature key={`feature-${i}`} icon={item.icon} title={item.title} description={item.description}/> )
        }
      </div>
    </section>
  )
}

export default Features
