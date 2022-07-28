import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div id='navBar'>
      <div id="iconWrapper">
        <p id='title'>EE-KAY-UH</p>
      </div>
      <div id='navBarWrapper'>
        <Link className="navBarLink" to='/'>Home</Link>
        <Link className="navBarLink" to='/shop'>Shop</Link>
        <Link className="navBarLink" to='/cart'>Cart</Link>
      </div>
    </div>
  )
}

export default NavBar;