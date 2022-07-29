import CartItem from "./CartItem";
import EmptyCart from "./EmptyCart";
import '../../styles/components/ShopPage.css';
import '../../styles/components/CartPage.css';
import '../../styles/components/ItemPage.css';

const CartPage = ({ cart, setCart }) => {
  const checkout = () => {
    setCart([]);
  }

  return (
    <div className='pageContent'>
      <h1 className="heading">Cart</h1>
      <div className="line"></div>
      {
        cart.length === 0 ? <EmptyCart /> :
          <div id="cartContainer">
            <div class="itemContainer">
              {
                cart.map(item => <CartItem key={item.id} product={item} />)
              }
            </div>
            <div className='line'></div>
            <div id="checkoutContainer">
              <h1 id='totalPrice'>Total: ${cart.reduce((sum, item) => sum + item.num * item.price, 0)}</h1>
              <button id='purchaseBtn' className="grow_skew_forward" onClick={checkout}>Checkout</button>
            </div>
          </div>
      }
    </div>
  )
}

export default CartPage;
