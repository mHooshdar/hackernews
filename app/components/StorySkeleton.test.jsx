/* eslint-disable no-undef */
import { render, screen } from '@testing-library/react';
import Component from './StorySkeleton';
import '@testing-library/jest-dom';

describe('StorySkeleton', () => {
  it('renders a story skeleton', () => {
    render(<Component />);
    const component = screen.getByTestId('story-skeleton');
    expect(component).toBeInTheDocument();
  });
});
