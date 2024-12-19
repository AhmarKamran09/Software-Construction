import { render, screen } from '@testing-library/react';
import CartPage from '../pages/CartPage';

test('renders the cart page', () => {
  render(<CartPage />);
  expect(screen.getByText(/your cart is empty/i)).toBeInTheDocument();
});
