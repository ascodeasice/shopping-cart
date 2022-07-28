import React from "react";
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Link, MemoryRouter } from 'react-router-dom';
import '@testing-library/jest-dom'
import App from '../App';

describe('Bad routing', () => {
  render(
    <MemoryRouter>
      <App />
      <Link to='/bad-routing' data-testid='badLink'>Bad Link</Link>
    </MemoryRouter>
  );

  userEvent.click(screen.getByTestId('badLink'));

  expect(screen.getByText('Item not found')).toBeInTheDocument();
})

describe('HomePage Component', () => {
  it('render text and button', () => {
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>);
    const heading = screen.getByRole('heading', { name: '"No, you pronounced it wrong!"' });
    const button = screen.getByRole('button', { name: 'Shop Now' });

    expect(heading).toBeInTheDocument();
    expect(button).toBeInTheDocument();
  })
  it('click Shop Now button go to shop page', () => {
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    );
    const button = screen.getByRole('button', { name: 'Shop Now' });
    userEvent.click(button);

    expect(screen.getByRole('heading').textContent).toBe('Shop Page');
  })
});

describe('NavBar component', () => {
  it('render icon and links', () => {
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    );
    const icon = screen.getByText('EE-KAY-UH');
    const homeLink = screen.getByRole('link', { name: 'Home' });
    const shopLink = screen.getByRole('link', { name: 'Shop' });
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
    const shopLink = screen.getByRole('link', { name: 'Shop' });
    const cartLink = screen.getByRole('link', { name: 'Cart' });

    userEvent.click(shopLink);
    expect(screen.getByRole('heading').textContent).toBe('Shop Page');
    userEvent.click(cartLink);
    expect(screen.getByRole('heading').textContent).toBe('Cart Page');
    userEvent.click(homeLink);
    expect(screen.getByRole('heading').textContent).toBe('"No, you pronounced it wrong!"');

  })
});