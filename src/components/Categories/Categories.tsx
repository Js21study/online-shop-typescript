import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { categoryIndexSelect, setCategoryIndex } from '../../redux/slices/filterSlice'
import './Categories.scss';

type CategoriesType = {
  category: string;
  index: number;
}

const Categories: React.FC<CategoriesType> = ({category, index}) => {
  
  const dispatch = useDispatch()
  const categorySelect = useSelector(categoryIndexSelect)
  return (
    <>
    <div onClick={() => dispatch(setCategoryIndex(index))} className={categorySelect===index ? 'active block': 'block'}>{category}</div>

   
    
    </>
  )
}

export default Categories