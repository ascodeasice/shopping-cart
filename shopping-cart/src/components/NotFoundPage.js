import '../styles/components/NotFoundPage.css';
import { Link } from 'react-router-dom';

const NotFoundPage = () => {
  return (
    <div id='notFoundPage' className='pageContent'>
      <h1 id='text404'>404</h1>
      <h1 id='notFoundText'>Item not found</h1>
      <Link to='/store'>
        <h1 id='shopLink'>Go back to store</h1>
      </Link>
    </div>
  )
}

export default NotFoundPage;