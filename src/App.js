
import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Main from './pages/Main/Main';
import { Route, Routes } from 'react-router-dom';
import NotFound from './pages/NotFound/NotFound';

function App() {
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
