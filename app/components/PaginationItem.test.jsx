/* eslint-disable no-undef */
import { render, screen } from '@testing-library/react';
import Component from './PaginationItem';
import '@testing-library/jest-dom';

describe('PaginationItem', () => {
  it('renders paginationItem', () => {
    render(<Component ariaLabel="label" />);
    const component = screen.getByLabelText('label');
    expect(component).toBeInTheDocument();
  });

  it('should paginationItem have the correct href', () => {
    render(<Component text="test" href="/testpage" ariaLabel="label" />);
    const anchor = screen.getByText('test');
    expect(anchor).toBeInTheDocument();
    expect(anchor).toHaveAttribute('href', '/testpage');
  });

  it('should paginationItem have the correct className', () => {
    render(<Component className="class" text="test" ariaLabel="label" />);
    const anchor = screen.getByText('test');
    const component = screen.getByLabelText('label');
    expect(anchor).toBeInTheDocument();
    expect(component).not.toHaveClass('class');
    expect(anchor).toHaveClass('class');
    expect(anchor).toHaveClass('cursor-pointer');
  });

  it('should paginationItem have the current hidden tag', () => {
    render(<Component current />);
    const hiddenTag = screen.getByLabelText('hidden');
    expect(hiddenTag).toBeInTheDocument();
  });

  it('should paginationItem have the correct disabled class', () => {
    render(<Component disabled text="test" />);
    const anchor = screen.getByText('test');
    expect(anchor).toBeInTheDocument();
    expect(anchor).not.toHaveClass('cursor-pointer');
  });
});
