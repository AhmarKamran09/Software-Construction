import { render, screen } from '@testing-library/react';
import ProductPage from '../pages/ProductPage';

test('displays the product details', () => {
  render(<ProductPage productId="123" />);
  expect(screen.getByText(/product details/i)).toBeInTheDocument();
});
