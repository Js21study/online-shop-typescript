import axios from 'axios';
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom'
import Item from '../../components/Item/Item';

export default function FullItem() {
    const [product, setProduct] = useState([])
    const {id} = useParams()
    const navigate = useNavigate()
    useEffect(() => {
        async function fetchProducts() {
          try {
              const {data} = await axios.get('https://638f44004ddca317d7f333ea.mockapi.io/items/' + id)
              setProduct(data)
          } catch (error) {
              
              alert('error with products catching')
              navigate('/')
          }
        }
  
        fetchProducts()
        
      }, [])
  
  if(!product) {
      return <>Loading...</>
  }
    
    console.log(id);
  return (
    <div className='box'>
        <Item key={product.id} obj={product} title={product.title} price={product.price} types={product.types} imageUrl={product.imageUrl} full={true}/>
    </div>
  )
}
