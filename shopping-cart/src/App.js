import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './components/HomePage';
import ItemPage from './components/ItemPage';
import ShopPage from './components/ShopPage/ShopPage';

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/shop' element={<ShopPage />} />
          <Route path='/id' element={<ItemPage />} /> {/* TODO change path to id of item*/}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
