import * as React from 'react'

const ToolboxApp = () => {

  return (
    <section className='toolbox-app' id='toolbox-app'>
      <div className="toolbox-app__inner">
        <picture className='toolbox-app__image'>
          {/*<source srcSet='images/page.webp' type='image/webp'/>*/}
          <source srcSet='images/page.jpg' type='image/png'/>

          <img src='/images/page.jpg' alt='Toolbox App panel'/>
        </picture>
        <div className='toolbox-app__info'>
          <h2 className='section-title toolbox-app__title'>Maintain your tools with the Toolbox App</h2>
          <p className='toolbox-app__description'>Simple installations, updates, and more</p>
          <a href='#' className='toolbox-app__link'>Learn more</a>
        </div>
      </div>
    </section>
  )
}


export default ToolboxApp
