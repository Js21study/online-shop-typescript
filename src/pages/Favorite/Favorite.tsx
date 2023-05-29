import React, { useEffect, useRef } from 'react'
import Item, { ProductType } from '../../components/Item/Item'
import { itemsFavSelect } from '../../redux/slices/favoriteSlice'
import { useSelector } from 'react-redux'

function Favorite() {

    const items = useSelector(itemsFavSelect)

    const isMounted = useRef(false)
  
  useEffect(() => {
    if (isMounted.current) {
      const jsonItems = JSON.stringify(items)
      localStorage.setItem('favorite', jsonItems)
    }
    isMounted.current = true
    
  }, [items])

 

 
  return (
    <div className='box'>
     <div>
     
      {items.length > 0 ?
      <div className="grid"> 
      {items.map((i: ProductType, index: number) =>  
       <Item obj={i} key={i.id} title={i.title} price={i.price} types={i.types} imageUrl={i.imageUrl} favIs={true}/>)}
       </div>
      : <center>You have not added any favorite products yet!</center> 
     
      }
    </div>
      </div>
  )
}

export default Favorite