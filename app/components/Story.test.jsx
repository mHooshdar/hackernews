/* eslint-disable no-undef */
import { render, screen } from '@testing-library/react';
import Component from './Story';
import '@testing-library/jest-dom';

describe('Story', () => {
  it('renders a story', () => {
    const item = {
      by: 'smusamashah',
      descendants: 41,
      id: 34654649,
      kids: [
        34655095, 34655056, 34655172, 34655568, 34655064, 34654901, 34655193,
        34655041,
      ],
      score: 74,
      time: 1675520245,
      title: 'De-Bloated Windows 11 Build Runs on 2GB of RAM',
      type: 'story',
      url: 'https://www.tomshardware.com/news/tiny11-lean-windows-11',
    };
    render(<Component item={item} />);
    const component = screen.getByLabelText('news');
    const title = screen.getByLabelText('title');
    const writer = screen.getByLabelText('writer');
    const id = screen.getByLabelText('id');
    const score = screen.getByLabelText('score');
    const time = screen.getByLabelText('time');
    expect(component).toBeInTheDocument();
    expect(title).toBeInTheDocument();
    expect(writer).toBeInTheDocument();
    expect(id).toBeInTheDocument();
    expect(score).toBeInTheDocument();
    expect(time).toBeInTheDocument();
  });

  it('renders a story and calculate time 1 hour ago correctly', async () => {
    let item = {
      by: 'smusamashah',
      descendants: 41,
      id: 34654649,
      kids: [
        34655095, 34655056, 34655172, 34655568, 34655064, 34654901, 34655193,
        34655041,
      ],
      score: 74,
      time: (+new Date() / 1000 - 3602),
      title: 'De-Bloated Windows 11 Build Runs on 2GB of RAM',
      type: 'story',
      url: 'https://www.tomshardware.com/news/tiny11-lean-windows-11',
    };
    render(<Component item={item} />);
    const time = screen.getByLabelText('time');
    expect(time).toHaveTextContent('1 hour ago');
  });

  it('renders a story and calculate time 2 hours ago correctly', async () => {
    let item = {
      by: 'smusamashah',
      descendants: 41,
      id: 34654649,
      kids: [
        34655095, 34655056, 34655172, 34655568, 34655064, 34654901, 34655193,
        34655041,
      ],
      score: 74,
      time: (+new Date() / 1000 - 7600),
      title: 'De-Bloated Windows 11 Build Runs on 2GB of RAM',
      type: 'story',
      url: 'https://www.tomshardware.com/news/tiny11-lean-windows-11',
    };
    render(<Component item={item} />);
    const time = screen.getByLabelText('time');
    expect(time).toHaveTextContent('2 hours ago');
  });

  it('renders a story and calculate time 50 minutes ago correctly', async () => {
    let item = {
      by: 'smusamashah',
      descendants: 41,
      id: 34654649,
      kids: [
        34655095, 34655056, 34655172, 34655568, 34655064, 34654901, 34655193,
        34655041,
      ],
      score: 74,
      time: (+new Date() / 1000 - 3020),
      title: 'De-Bloated Windows 11 Build Runs on 2GB of RAM',
      type: 'story',
      url: 'https://www.tomshardware.com/news/tiny11-lean-windows-11',
    };
    render(<Component item={item} />);
    const time = screen.getByLabelText('time');
    expect(time).toHaveTextContent('50 minutes ago');
  });
});
