import React from 'react'
import ReactPaginate from 'react-paginate';
import { useDispatch, useSelector } from 'react-redux';
import { filter, setPage } from '../../redux/slices/filterSlice';
import styles from './Pagination.module.scss'



const Pagination = () => {

  const dispatch = useDispatch()
  const {page} = useSelector(filter)
  const onChangePage = (e) => {
    dispatch(setPage(e))
  }

  return (
    <>
    <ReactPaginate
        className={styles.content}
        breakLabel="..."
        nextLabel=">"
        onPageChange={e=> onChangePage(e.selected + 1)}
        pageRangeDisplayed={3}
        pageCount={3}
        forcePage={page - 1}
        previousLabel="< "
        
      />
    </>
  )
}

export default Pagination