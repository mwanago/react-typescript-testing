import { fireEvent, render } from '@testing-library/react';
import { Counter } from './Counter.tsx';
import { describe, expect, it } from 'vitest';

describe('The Counter component', () => {
  describe('if the button is not clicked', () => {
    it('should display 0', () => {
      const counter = render(<Counter />);

      const paragraph = counter.getByText('The number of clicks: 0');

      expect(paragraph).toBeDefined();
    });
  });
  describe('if the button is clicked once', () => {
    it('should display 1', async () => {
      const counter = render(<Counter />);

      const button = counter.getByText('Click');

      fireEvent.click(button);

      const paragraph = counter.getByText('The number of clicks: 1');

      expect(paragraph).toBeDefined();
    });
  });
});
