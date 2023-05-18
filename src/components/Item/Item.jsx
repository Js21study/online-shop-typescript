import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addItem } from '../../redux/slices/cartSlice'
import './Item.scss';
import { FcLike, FcLikePlaceholder } from 'react-icons/fc';
import { addFavItem, itemsFavSelect, removeFavItem } from '../../redux/slices/favoriteSlice';
import { Link } from 'react-router-dom';

const ListTypes=['', 'універсально', 'для чоловіків', 'для жінок']
const Item = ({obj, title, price, types, imageUrl, favIs, full}) => {
  const [favAdd, setFavAdd] = useState(false)
  const dispatch = useDispatch()
  const itemsFavArray = useSelector(itemsFavSelect)

  

  const clickFavItemAdd = () => {
    dispatch(addFavItem(obj))
    setFavAdd(true)
  }

  const clickFavItemRemove = () => {
    dispatch(removeFavItem(obj))
    setFavAdd(false)
  }



  return (
    <>
     {full ?
      <div className='card-hover-full'>

  <div>
  {favIs ? <span onClick={() => {clickFavItemRemove()}} className="card-hover--favorite"><FcLike/></span>
      : !favAdd? <span onClick={() => {clickFavItemAdd()}} className="card-hover--favorite"><FcLikePlaceholder/></span>
      : <span onClick={() => {clickFavItemRemove()}} className="card-hover--favorite"><FcLike/></span>}
    <h3 className="card-hover__title">
      {title} <br /><span>{price} uah</span> 
    </h3>
    <p className="card-hover__text">{ListTypes[types]}</p>

    <a onClick={() => {
      dispatch(addItem(obj))
      window.location.reload()
    }} className='card-hover__fullbtn'>
      <span>Купити</span>
      <svg fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
      </svg>        
    </a>
    <p className="card-hover__text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam repellendus ullam iste labore? Porro qui quam explicabo voluptatem est eum ratione quia rerum harum facilis? Saepe accusamus vero dolore quibusdam!</p>
  </div>
  
  
  
  <img className='card-hover__fullImg' src={imageUrl} alt=""/>
  
  </div>
  
    :
    <div className="card-hover">
    {favIs ? <span onClick={() => {clickFavItemRemove()}} className="card-hover--favorite"><FcLike/></span>
    : !favAdd? <span onClick={() => {clickFavItemAdd()}} className="card-hover--favorite"><FcLikePlaceholder/></span>
    : <span onClick={() => {clickFavItemRemove()}} className="card-hover--favorite"><FcLike/></span>}
    
  
<div className="card-hover__content">
  <h3 className="card-hover__title">
    {title} <br /><span>{price} uah</span> 
  </h3>
  <p className="card-hover__text">{ListTypes[types]}</p>
  <Link to={`/product/${obj.id}`} className="card-hover__link">
    <span>Дізнатися </span>
    <svg fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
    </svg>        
  </Link>
  

</div>



<img className='card-hover__img' src={imageUrl} alt=""/>
<a onClick={() => dispatch(addItem(obj))} className="card-hover__button">
    <span>Купити</span>
    <svg fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
    </svg>        
  </a>
</div>}
    </>
  )
}

export default Item