import { Route, Routes } from 'react-router-dom';
import { useState } from 'react';

import HomePage from './components/HomePage';
import ItemPage from './components/ItemPage';
import ShopPage from './components/ShopPage/ShopPage';
import NavBar from './components/Navbar';
import NotFoundPage from './components/NotFoundPage';
import CartPage from './components/CartPage';

import Shark1 from './assets/shark1.jpg';
import Shark2 from './assets/shark2.jpg';
import Shark3 from './assets/shark3.jpg';
import Meatball1 from './assets/meatball1.jpg';
import Meatball2 from './assets/meatball2.jpg';
import Meatball3 from './assets/meatball3.jpg';
import Meatball4 from './assets/meatball4.jpg';
import Meatball5 from './assets/meatball5.jpg';
import Bin1 from './assets/bin1.jpg';
import Bin2 from './assets/bin2.jpg';
import Bin3 from './assets/bin3.jpg';
import Bin4 from './assets/bin4.jpg';
import Bin5 from './assets/bin5.jpg';
import Shelf1 from './assets/shelf1.jpg';
import Shelf2 from './assets/shelf2.jpg';
import Shelf3 from './assets/shelf3.jpg';
import Shelf4 from './assets/shelf4.jpg';

const App = () => {
  const [products, setProducts] = useState([
    {
      id: '0',
      name: 'BLÅHAJ',
      description: 'A cute shark doll, they don\' t bite people, Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut lacinia.',
      price: 20,
      numLeft: 0,
      imgSrc: [Shark1, Shark2, Shark3]
    },
    {
      id: '1',
      name: 'HUVUDROLL',
      description: `12 in a pack, made out of people who couldn\'t find the exit(not really),
       Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut lacinia.`,
      price: 5,
      numLeft: 20,
      imgSrc: [Meatball1, Meatball2, Meatball3, Meatball4, Meatball5]
    },
    {
      id: '2',
      name: 'HÖLASS',
      description: 'A practical sorting station that takes up little space. This bin takes care of both dry and wet waste in one place. Small openings in the edge make it possible to fix 2 bags in place at the same time.',
      price: 3,
      numLeft: 3,
      imgSrc: [Bin1, Bin2, Bin3, Bin4, Bin5]
    },
    {
      id: '3',
      name: 'BILLY',
      description: 'BILLY is a versatile bookcase that works just as good as a storage unit and is suitable to use in many different ways at home.',
      price: 210,
      numLeft: 1,
      imgSrc: [Shelf1, Shelf2, Shelf3, Shelf4]
    }
  ]);
  const [cart, setCarts] = useState([]);

  return (
    <div id='app'>
      <NavBar />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/store' element={<ShopPage products={products} />} />
        <Route path='/cart' element={<CartPage />} />
        <Route path='/*' element={<NotFoundPage />} />
        <Route path='/id' element={<ItemPage />} /> {/* TODO change path to id of item with map*/}
      </Routes>
    </div>
  );
}

export default App;
