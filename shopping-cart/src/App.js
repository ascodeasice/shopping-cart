import { Route, Routes } from 'react-router-dom';
import HomePage from './components/HomePage';
import ItemPage from './components/ItemPage';
import ShopPage from './components/ShopPage/ShopPage';
import NavBar from './components/Navbar';
import NotFoundPage from './components/NotFoundPage';
import CartPage from './components/CartPage';
// TODO out of stock ItemCard

const App = () => {
  return (
    <div id='app'>
      <NavBar />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/shop' element={<ShopPage />} />
        <Route path='/id' element={<ItemPage />} /> {/* TODO change path to id of item with map*/}
        <Route path='/cart' element={<CartPage />} />
        <Route path='*' element={<NotFoundPage />} />
      </Routes>
    </div>
  );
}

export default App;
