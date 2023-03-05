import React from 'react'
import Filter from '../../components/Filter'
import Items from '../../components/Items/Items'
import Pagination from '../../components/Paginations/Paginations'



const Main = () => {
  return (
    <div className="content">
      <div className="slider"></div>
        
          <Filter/>
          <Items/>
          <div className='container'><Pagination/></div>
      
      </div>
  )
}

export default Main