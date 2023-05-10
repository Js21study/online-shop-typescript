import React, { useState } from 'react'
import Filter from '../../components/Filter'
import Items from '../../components/Items/Items'
import Pagination from '../../components/Paginations/Paginations'



const Main = () => {
  const [open, setOpen] = useState(true)
  return (
    <div className='box'>
     
        
          <Filter/>
          <Items/>
          <Pagination/>
      
      </div>
  )
}

export default Main