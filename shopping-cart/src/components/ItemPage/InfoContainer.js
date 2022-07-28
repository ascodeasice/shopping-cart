import { useState } from "react"

const InfoContainer = ({ product, products, setProducts, cart, setCart }) => {
  const [purchaseNum, setPurchaseNum] = useState(0);
  const handleChange = (e) => {
    setPurchaseNum(Number(e.target.value));
  }

  const addToCart = () => {
    if (product.numLeft < purchaseNum) {
      return;
    }
    // already have product in cart
    if (cart.some(item => item.id === product.id)) {
      const newCart = structuredClone(cart);
      newCart.forEach(item => {
        if (item.id === product.id) {
          item.num += purchaseNum;
        }
      });
      setCart(newCart);
    } else {
      product.numLeft -= purchaseNum;
      setCart(cart.concat({
        id: product.id,
        name: product.name,
        description: product.description,
        num: purchaseNum,
        price: product.price
      }))
    }

    // remove purchased item from stock
    const newProducts = structuredClone(products);
    newProducts.forEach(item => {
      if (item.id === products.id) {
        item.numLeft -= purchaseNum;
      }
    });
    setProducts(newProducts);
  }

  return (
    <div id="infoContainer">
      <h2 className='infoTitle'>Purchase</h2>
      <div className='shortLine'></div>
      <div id="inputContainer">
        <label id='purchaseLabel' htmlFor='purchaseInput' className=''>Number</label>
        <input id='purchaseInput' value={purchaseNum} min={0} max={product.numLeft} type='number'
          onChange={handleChange} />
        <button onClick={addToCart}>Add to cart</button>
      </div>
      <h2 className='infoTitle'>Info</h2>
      <div className='shortLine'></div>
      <p className='itemDescription'> Price: ${product.price}{'\n'} Number: {product.numLeft} Left</p>
      <h2 className='infoTitle'>Description</h2>
      <div className='shortLine'></div>
      <p className='itemDescription'>{product.description}</p>
    </div>
  )
}

export default InfoContainer;