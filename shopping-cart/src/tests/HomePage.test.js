import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter } from 'react-router-dom';
import '@testing-library/jest-dom'; // For toBeInTheDocument()
import App from '../App';

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
  });

  it('click Shop Now button go to shop page', () => {
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    );
    const button = screen.getByRole('button', { name: 'Shop Now' });
    userEvent.click(button);

    expect(screen.getByText('Store')).toBeInTheDocument();
  })
});
