import React from 'react'
import { useSelector } from 'react-redux'
import Item, { ProductType } from '../Item/Item'
import {  ItemSliceSelectorItems, ItemSliceSelectorStatus} from '../../redux/slices/itemSlice'

const Items: React.FC  = () => {

  const items = useSelector(ItemSliceSelectorItems)
  const status = useSelector(ItemSliceSelectorStatus)

  const isItemsLoading = (status === 'loading')
 if (items.length > 0) {
  return (
    <>
    <div>
      <div className="grid">
      {isItemsLoading? [...Array(1)].map((i, index) => 
      <p key={index}>...Loading</p>) : 
      items.map((i: ProductType, index: number) => 
      
      <Item obj={i} key={i.id} title={i.title} price={i.price} types={i.types} imageUrl={i.imageUrl}/>)
      }
      
      </div>
        
    </div>
    
    </>
  )
 } else  return (
  <>
  <div className='text-center my-10 text-gray-500'>
    
      <h1>We didn't find any products!</h1>
  </div>
  
  </>
)
}

export default Items;