import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { BrowserRouter, Link } from 'react-router-dom';
import '@testing-library/jest-dom'; // For toBeInTheDocument()
import App from '../App';

describe('render properly', () => {
  it('heading, img, titles and descriptions', () => {
    render(
      <BrowserRouter >
        <App />
        <Link to='/0' data-testid='mockLink'>mock</Link>
      </BrowserRouter>
    );
    const mockLink = screen.getByTestId('mockLink');
    userEvent.click(mockLink);

    expect(screen.getByText('BLÅHAJ')).toBeInTheDocument();
    expect(screen.getByRole('img', { name: 'number 0' })).toBeInTheDocument();
    expect(screen.getByText('A cute shark doll, they don\' t bite people, Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut lacinia.')).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: 'Purchase' })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: 'Info' })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: 'Description' })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Add to cart' })).toBeInTheDocument();
  });
});

// describe('Add to cart', () => {
//   it('add item', () => {
//     render(
//       <BrowserRouter >
//         <App />
//         <Link to='/1' data-testid='mockLink'>mock</Link>
//       </BrowserRouter>
//     );
//     const mockLink = screen.getByTestId('mockLink');
//     userEvent.click(mockLink);
//     const purchaseBtn = screen.getByRole('button', { name: 'Add to cart' });
//     const purchaseInput = screen.getByRole('spinbutton', { name: 'Number' });
//     userEvent.type(purchaseInput, '2');
//     userEvent.click(purchaseBtn);

//     const itemLeft = screen.getByText(/Cart\(\d\)/i);
//     expect(itemLeft.textContent).toBe(`Cart(2)`);
//   });
// });