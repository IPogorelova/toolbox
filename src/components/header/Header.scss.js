import * as React from 'react'
import './Header.scss'

const Header = () => {

  return (
    <header className='header'>
      <a href='/' className='header__logo'>Toolbox</a>
      <nav className="header__nav">
        <ul>
          <li className='header__link'>
            <a href='#overview'></a>
          </li>
          <li className='header__link'>
            <a href='#app'></a>
          </li>
          <li className='header__link'>
            <a href='#' className='button'></a>
          </li>
        </ul>
      </nav>
    </header>
  )
}


export default Header
