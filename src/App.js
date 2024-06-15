import MenuPage from './pages/MenuPage'
import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import About from './pages/About';
import Contact from './pages/Contact';
import PageNotFound from './pages/PageNotFound';
import HomePage from './pages/HomePage';

function App() {
  return (
    <div>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<HomePage/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/menu' element={<MenuPage/>}/>
      <Route path='*' element={<PageNotFound/>}/>
    </Routes>
    </BrowserRouter>
    </div >
  );
}

export default App;
