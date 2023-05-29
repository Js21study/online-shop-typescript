import React, { ChangeEvent, useCallback, useContext, useState } from 'react'
import Categories from '../Categories/Categories'
import styles from './Header.module.css'
import { FcLikePlaceholder } from "react-icons/fc"
import { RxPerson } from "react-icons/rx";
import logo from '../../assets/img/logo.svg'
import { RiPhoneFill } from "react-icons/ri";
import { RiShoppingBagLine } from "react-icons/ri";
import { useDispatch, useSelector } from 'react-redux';
import { debounce } from "lodash";
import { filter, setSearch } from '../../redux/slices/filterSlice';
import { totalCountSelect, totalPriceSelect } from '../../redux/slices/cartSlice';
import { GlobalAppContext } from '../../App';
import { XMarkIcon } from '@heroicons/react/24/outline'
import { Link } from 'react-router-dom';




const Header: React.FC = () => {
  const {open, setOpen} = GlobalAppContext()
  const [openCategory, setOpenCategory]= useState(false)

  const dispatch = useDispatch()

  const [valueOrdinary, setValueOrdinary] = useState('')
  const List = ['ALL', 'ASSESORIES', 'PARFUMS', 'HAIR']

  const totalPrice = useSelector(totalPriceSelect)
  const totalCount = useSelector(totalCountSelect)

  const updateSearchValue = useCallback(
    debounce((str) => {
       dispatch(setSearch(str))
  }, 
  500), 
  [],
  )

  const onChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
    setValueOrdinary(e.target.value)
    updateSearchValue(e.target.value)
  }
  const {search} = useSelector( filter )



  return (
    <div className={styles.header}>
      <div className={styles.flex}>
       <Link to="/"><div className={styles.flex}> <img src={logo} alt="logo" /> <span> CREATOR</span></div></Link>
        <div className={styles.flex}>
        <span className={styles.icon}><a href="tel:…"><RiPhoneFill/></a></span>
        <Link className={styles.icon} to="/favorite"><FcLikePlaceholder/></Link>
        {/* <span className={styles.icon}><RxPerson/></span> */}
        </div>
      </div>

      <div className={styles.flex}>
        <div>
  
          <input value={valueOrdinary} type="text" onChange={onChangeInput} className={styles.input} />
          
        </div>
        
        <div className={styles.cartButton} onClick={() => setOpen(!open)}>
        <div className={styles.flex}>
        
            <div className={styles.flex}>
              <p>{totalCount ? totalCount: 0} </p><span className={styles.icon}><RiShoppingBagLine/></span>
            </div>
            
            <div>
              <p>{totalPrice} ₴</p>
            </div>

          </div>
        </div>
      </div>

      <div className={styles.container}>
      <div className={styles.maxCategory}>{List.map((el, i) => <Categories key={el} category={el} index={i}/>)}</div>

      <div className={styles.flex}>
      {!openCategory?
     
     <div className={styles.menuCategory} onClick={() => setOpenCategory(true)}> <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
     <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5" />
   </svg>
   </div>


   : <>
   <div className={styles.menuCategory} onClick={() => setOpenCategory(false)}><XMarkIcon className="h-6 w-6" aria-hidden="true" /></div>
   <div className={styles.minCategory}>
{List.map((el, i) => <Categories key={el} category={el} index={i}/>)}
</div></>}
</div>
      

      </div>
    </div>
  )
}

export default Header