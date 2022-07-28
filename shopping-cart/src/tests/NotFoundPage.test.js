import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Link, MemoryRouter } from 'react-router-dom';
import '@testing-library/jest-dom'; // toBeInTheDocument
import App from '../App';

describe('Bad routing', () => {
  it('Bad routing lead to NotFoundPage', () => {
    render(
      <MemoryRouter>
        <App />
        <Link to='/bad-routing' data-testid='badLink'>Bad Link</Link>
      </MemoryRouter>
    );

    userEvent.click(screen.getByTestId('badLink'));

    expect(screen.getByText('Item not found')).toBeInTheDocument();
  });
})
