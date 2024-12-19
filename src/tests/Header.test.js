import { render, screen } from '@testing-library/react';
import Header from '../components/Header';

test('renders the header logo', () => {
  render(<Header />);
  const logoElement = screen.getByAltText(/shofy fashion/i);
  expect(logoElement).toBeInTheDocument();
});
