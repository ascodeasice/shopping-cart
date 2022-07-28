import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter } from 'react-router-dom';
import '@testing-library/jest-dom'; // For toBeInTheDocument()
import App from '../App';


describe('NavBar component', () => {
  it('render icon and links', () => {
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    );
    const icon = screen.getByText('EE-KAY-UH');
    const homeLink = screen.getByRole('link', { name: 'Home' });
    const shopLink = screen.getByRole('link', { name: 'Store' });
    const cartLink = screen.getByRole('link', { name: 'Cart' });

    expect(icon).toBeInTheDocument();
    expect(homeLink).toBeInTheDocument();
    expect(shopLink).toBeInTheDocument();
    expect(cartLink).toBeInTheDocument();
  });

  it('click links go to right pages', () => {
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    );

    const homeLink = screen.getByRole('link', { name: 'Home' });
    const shopLink = screen.getByRole('link', { name: 'Store' });
    const cartLink = screen.getByRole('link', { name: 'Cart' });

    userEvent.click(shopLink);
    expect(screen.getByRole('heading', { name: 'Store' })).toBeInTheDocument();
    userEvent.click(cartLink);
    expect(screen.getByRole('heading').textContent).toBe('Cart Page');
    userEvent.click(homeLink);
    expect(screen.getByRole('heading').textContent).toBe('"No, you pronounced it wrong!"');

  })
});