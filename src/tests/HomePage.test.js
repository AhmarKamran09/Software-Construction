import { render, screen } from '@testing-library/react';
import HomePage from '../pages/HomePage';

test('renders the homepage title', () => {
  render(<HomePage />);
  expect(screen.getByText(/welcome to shofy fashion/i)).toBeInTheDocument();
});
