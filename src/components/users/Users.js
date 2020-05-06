import * as React from 'react'
import {useMatchMedia} from '../../utils/hooks'

const Users = ({users}) => {
  const isMobile = useMatchMedia('screen and (min-width: 768px)')

  if (isMobile) {
    return (
      <section className='users' id='users'>
        <div className='container inner-row'>
          <div className='users__title-wrapper'>
            <p className='users__title'>Trusted by 320,083 businesses worldwide</p>
          </div>
          <div className='users__items'>
            {
              users.map((item, i) =>
                <>
                  <div key={`user-${i}-1`} className='users__icon'>
                    <img src={`/images/users/${item[0].icon}`} alt={item[0].alt}/>
                  </div>
                  <div key={`user-${i}-2`} className='users__icon'>
                    <img src={`/images/users/${item[1].icon}`} alt={item[1].alt}/>
                  </div>
                </>
              )
            }
          </div>
        </div>
      </section>
    )
  } else {
    return (
      <section className='users' id='users'>
        <div className='container inner-row'>
          <div className='users__title-wrapper'>
            <p className='users__title'>Trusted by 320,083 businesses worldwide</p>
          </div>
          <div className='users__items'>
            {
              users.map((item, i) =>
                <div className='users__col'>
                  <div key={`user-${i}-1`} className='users__icon'>
                    <img src={`/images/users/${item[0].icon}`} alt={item[0].alt}/>
                  </div>
                  <div key={`user-${i}-2`} className='users__icon'>
                    <img src={`/images/users/${item[1].icon}`} alt={item[1].alt}/>
                  </div>
                </div>
              )
            }
          </div>
        </div>
      </section>
    )
  }
}


export default Users
