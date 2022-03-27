import { render, screen } from '@testing-library/react';

import App from './index';

test('first test', () => {
  render(<App />);

  const app = screen.getByText('bruh');
  expect(app).toBeChecked;
})
