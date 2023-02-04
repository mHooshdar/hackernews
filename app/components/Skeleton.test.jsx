/* eslint-disable no-undef */
import { render, screen } from '@testing-library/react';
import Component from './Skeleton';
import '@testing-library/jest-dom';

describe('Skeleton', () => {
  it('renders a skeleton', () => {
    render(<Component />);
    const component = screen.getByTestId('skeleton');
    expect(component).toBeInTheDocument();
  });
});
