import { Raleway } from '@next/font/google';
import cn from 'classnames';
import List from './components/List';

const font = Raleway({ subsets: ['latin'] });
export default async function Home() {
  return (
    <main className={cn(font.className, 'p-4')}>
      <h1 className="font-bold text-4xl mb-3">Hacker News</h1>
      <h2 className="font-bold text-2xl mb-3">Top Stories</h2>
      <List className="mb-4" />
    </main>
  );
}
