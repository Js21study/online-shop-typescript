import React, { useCallback, useState } from 'react'
import Categories from '../Categories/Categories'
import styles from './Header.module.css'
import { FcLikePlaceholder } from "react-icons/fc"
import { RxPerson } from "react-icons/rx";
import logo from '../../assets/img/logo.svg'
import { RiPhoneFill } from "react-icons/ri";
import { RiShoppingBagLine } from "react-icons/ri";
import { useDispatch, useSelector } from 'react-redux';
import debounce from 'lodash.debounce'
import { filter, setSearch } from '../../redux/slices/filterSlice';




const Header = () => {
  const dispatch = useDispatch()

  const [valueOrdinary, setValueOrdinary] = useState('')
  const List = ['ALL', 'ASSESORIES', 'PARFUMS', 'HAIR']

  const updateSearchValue = useCallback(
    debounce((str) => {
       dispatch(setSearch(str))
  }, 
  500), 
  [],
  )

  const onChangeInput = (e) => {
    setValueOrdinary(e.target.value)
    updateSearchValue(e.target.value)
  }
  const {search} = useSelector( filter )



  return (
    <div className={styles.header}>
      <div className={styles.flex}>
        <div className={styles.flex}> <img src={logo} alt="logo" /> <span> CREATOR</span></div>
        <div className={styles.flex}>
        <span className={styles.icon}><RiPhoneFill/></span>
        <span className={styles.icon}><FcLikePlaceholder/></span>
        <span className={styles.icon}><RxPerson/></span>
        </div>
      </div>

      <div className={styles.flex}>
        <div>
  
          <input value={valueOrdinary} type="text" onChange={onChangeInput} className={styles.input} />
          
        </div>
        
        <div className={styles.cartButton}>
        <div className={styles.flex}>
        
            <div className={styles.flex}>
              <p>0 </p><span className={styles.icon}><RiShoppingBagLine/></span>
            </div>
            
            <div>
              <p>0 ₴</p>
            </div>

          </div>
        </div>
      </div>

      <div className={styles.container}>
      
      <div className={styles.flex}>
        {List.map((el, i) => <Categories key={el} category={el} index={i}/>)}
      </div>

      </div>
    </div>
  )
}

export default Header