import * as React from 'react'
import cn from 'classnames'

const Header = () => {
  const [activeLink, setActiveLink] = React.useState('Overview')
  const [isMenuOpen, setIsMenuOpen] = React.useState(false)

  React.useEffect(() => {
    document.addEventListener('click', (e) => {
      if ((!e.target.classList.length || !e.target.classList.contains('header__nav')) && isMenuOpen) {
        setIsMenuOpen(false)
        console.log(isMenuOpen)
      }
    })
  }, [isMenuOpen])
  return (
    <header className='header'>
      <div className='container header__inner'>
        <a href='/' className='header__logo'>Toolbox App</a>
        <button
          className='header__menu-button'
          onClick={(e) => {
            e.stopPropagation()
            if (window.innerWidth <= 550) {
              setIsMenuOpen(!isMenuOpen)
            }
          }}
        >
          {activeLink}
        </button>
        <nav>
          <ul className={cn('header__nav', {'header__nav_opened' : isMenuOpen})}>
            <li className='header__link'>
              <a
                href='#overview'
                className='link'
                onClick={(e) => setActiveLink('Overview')}
              >
                Overview
              </a>
            </li>
            <li className='header__link'>
              <a
                href='#app'
                className='link'
                onClick={(e) => setActiveLink('Toolbox App')}
              >
                Toolbox App
              </a>
            </li>
            <li className='header__link'>
              <a href='#' className='button button_border button_small'>Buy now</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}


export default Header
