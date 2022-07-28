import React from "react";
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter } from 'react-router-dom';
import '@testing-library/jest-dom'
import App from '../App';

describe('HomePage Component', () => {
  it('render text and button', () => {
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>);
    const heading = screen.getByRole('heading');
    const button = screen.getByRole('button', { name: 'Shop Now' });

    expect(heading.textContent).toBe('"No, you pronounced it wrong!"');
    expect(button).toBeInTheDocument();
  })
  it('Click Shop Now button go to shop page', () => {
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    );
    const button = screen.getByRole('button', { name: 'Shop Now' });
    userEvent.click(button);

    expect(screen.getByRole('heading').textContent).toBe('Shop Page');
  })

})