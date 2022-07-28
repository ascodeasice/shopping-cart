import ItemCard from './ItemCard';
import '../../styles/components/ShopPage.css';

const ShopPage = ({ products }) => {

  return (
    <div id='shopPage' className='pageContent'>
      <h1 id='shopHeading'>Store</h1>
      <div className='line'></div>
      <div id="itemContainer">
        {
          products.map(product => <ItemCard key={product.id} product={product} />)
        }
      </div>
    </div>
  );
};

export default ShopPage;