import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter, BrowserRouter } from 'react-router-dom';
import '@testing-library/jest-dom'; // For toBeInTheDocument()
import App from '../App';
import ShopPage from '../components/ShopPage/ShopPage';
import ItemCard from '../components/ShopPage/ItemCard';

let products = [];

beforeEach(() => {
  products = [{
    id: 1111,
    name: 'mock1',
    numLeft: 0,
    imgSrc: ['#', '#']
  },
  {
    id: 2222,
    name: 'mock2',
    numLeft: 1,
    imgSrc: ['#', '#']
  }]
});

describe('Render component', () => {
  it('Heading and item cards', () => {
    render(
      <MemoryRouter>
        <ShopPage products={products} />
      </MemoryRouter>
    )
    const heading = screen.getByText('Store');
    const imgs = screen.getAllByRole('img');
    const links = screen.getAllByRole('link');

    expect(heading).toBeInTheDocument();
    expect(imgs.length).toBe(products.length);
    expect(links.length).toBe(products.length);
  });
});

describe('Links of itemCard', () => {
  it('Click links take you to ItemPage', () => {
    render(
      <BrowserRouter>
        {products.map(product =>
          <ItemCard product={product} />
        )}
      </BrowserRouter>
    );
    products.forEach((product) => {
      expect(screen.getByText(product.name).closest('a')).toHaveAttribute('href', `/${product.numLeft === 0 ? '' : product.id}`);
    });

  });
})