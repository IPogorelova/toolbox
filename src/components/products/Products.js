import * as React from 'react'
import cn from 'classnames'
import {useMatchMedia} from '../../utils/hooks'

const ProductIcon = ({name, icon, rowAmount}) => {
  return (
    <div className={cn('products__icon', {'products__icon_3' : rowAmount === 3})}>
      <img src={`/images/products/${icon}`} alt={name}/>
    </div>
  )
}

const ProductInfo = ({index, name, tags, activeItem, setActiveItem}) => {
  return (
    <div className={cn('products__item products-item', {'products-item_active' : activeItem === index})}>
      <span className='products-item__name'>{name}</span>
      <div className='products-item__tags'>
        {tags.map((tag, i) => <span key={`tag-${i}`} className='products-item__tag tag'>{tag}</span>)}
      </div>
    </div>
  )
}

const ProductInfoMobile = ({icon, name, tags}) => {
  console.log('hey!!')
  return (
    <div className='products__item products-item'>
      <img src={`/images/products/${icon}`} alt={name}/>
      <span className='products-item__name'>{name}</span>
      <div className='products-item__tags'>
        {tags.map((tag, i) => <span key={`tag-${i}`} className='products-item__tag tag'>{tag}</span>)}
      </div>
    </div>
  )
}

const Products = ({data, rowAmount}) => {
  let {title, description, items} = data
  let [activeItem, setActiveItem] = React.useState(null)

  const isMobile = useMatchMedia('screen and (min-width: 768px)')

  if (isMobile) {
    return (
      <section className='products container'>
        {description && <p className='products__description'>{description}</p>}
        <h2 className='products__title'>{title}</h2>
        <div className='products__items'>
          {
            items.map((item, i) =>
              <ProductInfoMobile
                key={`item-${i}`}
                icon={item.icon}
                name={item.name}
                tags={item.tags}
              />
            )
          }
        </div>
      </section>
    )
  } else {
    return (
      <section className='products container'>
        <div className='inner-row products__title-container'>
          <div className='inner-col'>
            <h2 className='products__title'>{title}</h2>
          </div>
          <div className='inner-col'>
            {description && <p className='products__description'>{description}</p>}
          </div>
          </div>
        <div className='inner-row'>
          <div className='inner-col'>
            <div className='products__icons'>
              {
                items.map((item, i) =>
                  <ProductIcon
                    key={`icon-${i}`}
                    index={i}
                    name={item.name}
                    icon={item.icon}
                    rowAmount={rowAmount}
                    onMouseEnter={() => setActiveItem(i)}
                  />
                )
              }
            </div>
          </div>
          <div className='inner-col'>
            <div className='products__info'>
              {
                items.map((item, i) =>
                  <ProductInfo
                    key={`product-${i}`}
                    name={item.name}
                    tags={item.tags}
                    activeItem={activeItem}
                    setActiveItem={setActiveItem}
                    onMouseEnter={() => {setActiveItem(i); console.log(i, activeItem)}}
                  />
                )
              }
            </div>
          </div>
        </div>
      </section>
    )
  }
}

export default Products
