import React from 'react'
import { useSelector } from 'react-redux'
import Item from '../Item/Item'

const Items = () => {

  
  
  const {items, status} = useSelector(state => state.item)

  const isItemsLoading = (status === 'loading')
  return (
    <>
    <div>
      <div className="grid">
      {isItemsLoading? [...Array(1)].map((i, index) => 
      <p key={index}>...Loading</p>) : 
      items.map((i, index) => 
      
      <Item obj={i} key={i.id} title={i.title} price={i.price} types={i.types} imageUrl={i.imageUrl}/>)
      }
      
      </div>
        
    </div>
    
    </>
  )
}

export default Items