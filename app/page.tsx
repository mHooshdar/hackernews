'use client';

import { Raleway } from '@next/font/google';
import cn from 'classnames';
import { useEffect, useState } from 'react';
import List from './components/List';
import Moon from './icons/moon';
import Sun from './icons/sun';

const font = Raleway({ subsets: ['latin'] });
export default function Home() {
  const [isDark, setIsDark] = useState(false);
  function setDark() {
    document.documentElement.classList.add('dark');
    localStorage.setItem('theme', 'dark');
    setIsDark(true);
  }
  function setLight() {
    document.documentElement.classList.remove('dark');
    localStorage.setItem('theme', 'light');
    setIsDark(false);
  }

  useEffect(() => {
    if (
      localStorage.theme === 'dark' ||
      (localStorage.theme !== 'light' &&
        window.matchMedia('(prefers-color-scheme: dark)').matches)
    ) {
      setDark();
    }
  }, []);

  return (
    <main className={cn(font.className, 'p-4')}>
      <div className="flex items-center">
        <h1 className="flex font-bold text-4xl mb-3 dark:text-gray-100">
          Hacker News
        </h1>
        <button
          id="theme-toggle"
          type="button"
          onClick={isDark ? setLight : setDark}
          className="ml-auto text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5"
        >
          {isDark ? <Sun /> : <Moon />}
        </button>
      </div>
      <h2 className="font-bold text-2xl mb-3 dark:text-gray-100">
        Top Stories
      </h2>
      <List className="mb-4" />
    </main>
  );
}
