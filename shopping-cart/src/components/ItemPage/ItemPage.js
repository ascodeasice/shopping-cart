import { useLocation } from 'react-router-dom';
import NotFoundPage from '../NotFoundPage';
import ImageSlider from './ImageSlider';
import '../../styles/components/ItemPage.css';
import InfoContainer from './InfoContainer';

const ItemPage = ({ cart, setCart, products, setProducts }) => {
  const location = useLocation();
  const id = location.pathname.slice(1);
  const product = products.filter(product => product.id === id)[0];

  if (products.some(product => product.id === id)) {
    return (
      <div id='itemPage' className='pageContent'>
        <h1 className='heading'>{product.name}</h1>
        <div className='line'></div>
        <ImageSlider srcList={product.imgSrc} />
        <InfoContainer cart={cart} setCart={setCart}
          products={products} setProducts={setProducts} product={product} />
      </div >
    );
  } else {
    return (
      <NotFoundPage />
    )
  }
};

export default ItemPage;