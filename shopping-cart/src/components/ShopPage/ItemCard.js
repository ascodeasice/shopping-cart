import { Link } from 'react-router-dom';

const ItemCard = ({ product }) => {
  const hoverImg = (e) => {
    e.target.src = product.imgSrc[1] || product.imgSrc[0];
  }

  const leaveImg = (e) => {
    e.target.src = product.imgSrc[0];
  }

  return (
    <div className={`itemCard ${(product.numLeft === 0 ? 'outOfStock' : '')}`}>
      <Link to={`/${product.id}`}>
        <img className="itemImg" src={product.imgSrc[0]} alt={product.name}
          onMouseOver={hoverImg} onMouseLeave={leaveImg} />
        <h1 className="productName">{product.name} </h1>
        <h1 className='productPrice'>${product.price}</h1>
        {
          product.numLeft === 0 ? <p>Out of stock</p> : ''
        }
      </Link>
    </div>
  )
}

export default ItemCard;