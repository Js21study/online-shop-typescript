import React from 'react'

const ListTypes=['', 'універсально', 'для чоловіків', 'для жінок']
const Item = ({id, title, price, types, imageUrl}) => {
  return (
    <div>
      <div className="card-hover">
    <div className="card-hover__content">
      <h3 className="card-hover__title">
        {title} <br /><span>{price} uah</span> 
      </h3>
      <p className="card-hover__text">{ListTypes[types]}</p>
      <a href="#" className="card-hover__link">
        <span>Дізнатися </span>
        <svg fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
        </svg>        
      </a>
      

    </div>


   
    <img src={imageUrl} alt=""/>
    <a href="#" className="card-hover__button">
        <span>Купити</span>
        <svg fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
        </svg>        
      </a>
  </div>
    </div>
  )
}

export default Item