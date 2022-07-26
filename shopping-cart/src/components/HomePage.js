import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div id='homePage' className='pageContent'>
      <h1 id='slogan'>"No, you pronounced it wrong!"</h1>
      <Link id='shopBtnLink' to='/shop'><button id="shopBtn">Shop Now</button></Link>
    </div>
  );
};

export default HomePage;