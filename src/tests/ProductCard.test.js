import { render, screen } from '@testing-library/react';
import ProductCard from '../components/ProductCard';

const mockProduct = {
  name: 'Stylish Shirt',
  price: 29.99,
};

test('displays product name and price', () => {
  render(<ProductCard product={mockProduct} />);
  expect(screen.getByText(/stylish shirt/i)).toBeInTheDocument();
  expect(screen.getByText(/\$29.99/i)).toBeInTheDocument();
});
