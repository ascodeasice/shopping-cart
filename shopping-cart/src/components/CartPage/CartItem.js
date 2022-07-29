import { Link } from "react-router-dom";

const CartItem = ({ product }) => {
  return (
    <div className="itemCard">
      <Link to={`/${product.id}`}>
        <img className="itemImg" src={product.srcList[0] || '#'} alt={product.name} />
        <h1 className="productName">{product.name} ${product.price}</h1>
        <h1 className="productPrice">Number: {product.num}</h1>
      </Link>
    </div>
  )
};

export default CartItem;