import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { BrowserRouter } from 'react-router-dom';
import '@testing-library/jest-dom'; // For toBeInTheDocument()
import App from '../App';

describe('HomePage Component', () => {
  it('render text and button', () => {
    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>);
    const heading = screen.getByRole('heading', { name: '"No, you pronounced it wrong!"' });
    const button = screen.getByRole('button', { name: 'Shop Now' });

    expect(heading).toBeInTheDocument();
    expect(button).toBeInTheDocument();
  });

  it('click Shop Now button go to shop page', () => {
    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );
    const button = screen.getByRole('button', { name: 'Shop Now' });
    userEvent.click(button);

    expect(screen.getByRole('heading', { name: 'Store' })).toBeInTheDocument();
  })
});
