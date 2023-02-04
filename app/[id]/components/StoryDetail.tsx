import Link from 'next/link';
import type { StoryDTO } from '../../types';

interface StoryProps {
  item: StoryDTO;
}

export default function Story({ item }: StoryProps) {
  return (
    <Link className="border border-zinc-700" href={`/${item.id}`}>
      {Object.keys(item).join(' , ')}
      <div className="flex">
        <h2>{item.title}</h2>
        <h2>{item.type}</h2>
      </div>
    </Link>
  );
}
