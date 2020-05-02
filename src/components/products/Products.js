import * as React from 'react'
import './Products.scss'

const ProductIcon = ({name, icon}) => {
  return (
    <div className='products__icon'>
      <img src={icon} alt={name}/>
    </div>
  )
}

const ProductInfo = ({name, tags}) => {
  return (
    <div className='products__item products-item'>
      <span className='product-item__name'>{name}</span>
      <div className='product-item__tags'>
        {tags.map((i, tag) => <span key={`tag-${i}`} className='product-item__tag'>{tag}</span>)}
      </div>
    </div>
  )
}

const Products = (data) => {
  let {title, description, items} = data

  return (
    <div className='products'>
      <div className='inner-col'>
        <h2 className='products__title'>{title}</h2>
        <div className='products__icons'>
          {
            items.map((i, item) => <ProductIcon key={`icon-${i}`} name={item.name} icon={item.icon}/>)
          }
        </div>
      </div>
      <div className='inner-col'>
        {description.length && <p className='products__description'>{description}</p>}
        <div className='products__info'>
          {
            items.map((i, item) => <ProductInfo key={`product-${i}`} name={item.name} tags={item.tags}/>)
          }
        </div>
      </div>
    </div>
  )
}

export default Products
