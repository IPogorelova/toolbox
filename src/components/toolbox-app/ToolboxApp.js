import * as React from 'react'

const ToolboxApp = () => {

  return (
    <section className='toolbox-wrapper' id='toolbox-app'>
      <div className='toolbox-app'>
        <div className='toolbox-app__inner'>
          <picture className='toolbox-app__image'>
            <source
              type='image/webp'
              srcSet='/images/page.webp 1x,
                      /images/page@2x.webp 2x'
            />
            <source
              type='image/jpg'
              srcSet='/images/page.jpg 1x,
                      /images/page@2x.jpg 2x'
            />
            <img
              alt='Toolbox App panel'
              src='/images/page.jpg'
              srcSet='/images/page.jpg 1x,
                      /images/page@2x.jpg 2x'
            />
          </picture>
          <div className='toolbox-app__info'>
            <h2 className='toolbox-app__title'>Maintain your tools with the Toolbox App</h2>
            <p className='toolbox-app__description'>Simple installations, updates, and more</p>
            <a href='#' className='toolbox-app__link'>Learn more</a>
          </div>
        </div>
      </div>
    </section>
  )
}


export default ToolboxApp
