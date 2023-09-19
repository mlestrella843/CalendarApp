import { render, screen } from '@testing-library/react';
import CalendarApp from './CalendarApp.component';

test('renders learn react link', () => {
  render(<CalendarApp />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
