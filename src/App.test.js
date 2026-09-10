import { render, screen } from '@testing-library/react';
import App from './App';

// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });

test('renders Alex B text', () => {
  render(<App />);
  const heading = screen.getByText(/Alex B/i);
  expect(heading).toBeInTheDocument();
});
