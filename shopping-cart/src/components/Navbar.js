import { Link } from "react-router-dom";
import '../styles/components/NavBar.css';
import Cart from '../assets/cart.svg';

const NavBar = ({ cart }) => {
  return (
    <div id='navBar'>
      <div id="iconWrapper">
        <p id='icon'>EE-KAY-UH</p>
      </div>
      <div id='navBarWrapper'>
        <Link className="navBarLink" to='/'>Home</Link>
        <Link className="navBarLink" to='/store'>Store</Link>
        <Link className="navBarLink" to='/cart'>
          <img id='cartIcon' src={Cart} alt='' />
          ({cart.reduce((sum, item) => sum + item.num, 0)})
        </Link>
      </div>
    </div>
  )
}

export default NavBar;