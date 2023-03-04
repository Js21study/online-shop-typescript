import React from 'react'
import Filter from '../../components/Filter'
import Items from '../../components/Items/Items'


const Main = () => {
  return (
    <div className="content">
      <div className="slider"></div>
        
          <Filter/>
          <Items/>
      
      </div>
  )
}

export default Main