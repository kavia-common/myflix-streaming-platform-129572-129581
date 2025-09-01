import { render, screen } from '@testing-library/react';
import App from './App';

// PUBLIC_INTERFACE
test('renders app header with "For"', () => {
  /**
   * This test verifies that the application renders the header showing the profile context
   * text "For [Name]" as specified in the design. It ensures routing and providers load.
   */
  render(<App />);
  const headerText = screen.getByText(/For/i);
  expect(headerText).toBeInTheDocument();
});
