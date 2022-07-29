import Github from '../../assets/github.svg';

const EmptyCart = () => {
  return (
    <div id='emptyCartContainer'>
      <h1 id='noItemText' className="heading">No item in cart</h1>
      <a id='githubLink' href="https://github.com/ascodeasice/shopping-cart">
        <img id='githubIcon' src={Github} alt='' />
        <h1 className='heading linkText'>Check github</h1>
      </a>
      <a id='ikeaLink' href="https://www.ikea.com/">
        <h1 className='heading linkText'>Check IKEA</h1>
      </a>
    </div>
  )
}

export default EmptyCart;