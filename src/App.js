
import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Main from './pages/Main/Main';
import { Route, Routes } from 'react-router-dom';
import NotFound from './pages/NotFound/NotFound';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchItems } from './redux/slices/itemSlice';
import './App.scss';
import { categoryIndexSelect, filter, sortSelectObj, typeIndexSelect } from './redux/slices/filterSlice';

function App() {
  const dispatch = useDispatch()
  const sortSelect = useSelector(sortSelectObj)
  const categoryIn = useSelector(categoryIndexSelect)
  const typeIn = useSelector(typeIndexSelect)
  const {search} = useSelector(filter)
  const {page} = useSelector(filter)

  const getItems = async () => {
    const category = categoryIn
    const order = sortSelect.sort.includes('-') ? 'asc' : 'desc'
    const sort = sortSelect.sort.replace('-', '')
    const type = typeIn
    const searchVal = search ? `&search=${search}` : ''
    const pageVal = page



    dispatch(fetchItems({
      sort,
      order,
      category,
      type,
      searchVal,
      pageVal,
    }))
  }
  useEffect(() => {
  
    getItems()
  }, [categoryIn, sortSelect.sort, typeIn, search, page])


  console.log(page);
  return (

<div className="App">
  <Header/>
  <Routes>
 
  <Route path='/' element={<Main/>}/>
  <Route path='*' element={<NotFound/>}/>

  </Routes>
  <Footer/>
</div>



  );
}

export default App;
