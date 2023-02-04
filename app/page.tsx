import { Inter } from '@next/font/google';
import List from './components/List';

const inter = Inter({ subsets: ['latin'] });
export default async function Home() {
  return (
    <main className={inter.className}>
      <div className="pb-10 bg-red-50">
        <List />
      </div>
    </main>
  );
}
