import { Route, Routes } from 'react-router-dom';
import { useState } from 'react';

import HomePage from './components/HomePage';
import ItemPage from './components/ItemPage/ItemPage';
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
      description: `Try our delicious HUVUDROLL chicken meatballs - gently seasoned to preserve the natural, juicy chicken flavour. And choosing them helps you reduce your climate footprint by eating less red meat.

      Serve the chicken meatballs as classic Swedish meatballs with mashed potatoes, cream sauce and lingonberry jam - or try them with pasta, vegetables or dishes inspired by Asian cuisine.
      
      Chicken meatballs should taste like chicken. That's why we've seasoned the chicken meat gently, allowing its natural, juicy flavour to stand out. Still, its taste is not unlike the beef and pork meatball.
      
      By eating white meat instead of red meat you reduce your climate footprint.
      
      Easily prepared from frozen in minutes. In the oven, in the microwave or on the stove.
      
      Easily portioned. Prepare the amount needed, leave the rest in the freezer.
      
      Just as tasty warm as they are cold, e.g. halved as a sandwich topping.`,
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
  const [cart, setCart] = useState([]);


  return (
    <div id='app'>
      <NavBar cart={cart} />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/store' element={<ShopPage products={products} />} />
        <Route path='/cart' element={<CartPage />} />
        <Route path='/*' element={<ItemPage cart={cart} setCart={setCart}
          products={products} setProducts={setProducts} />} />
        <Route path='/*' element={<NotFoundPage />} />
      </Routes>
    </div>
  );
}

export default App;
