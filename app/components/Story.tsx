import Link from 'next/link';
import { useMemo } from 'react';
import dayjs from 'dayjs';
import type { StoryDTO } from '../types';

interface StoryProps {
  item: StoryDTO;
  index: number;
}

export default function Story({ item, index }: StoryProps) {
  const formattedTime = useMemo(() => {
    const secs = +new Date() - item.time * 1000;
    const hourUnit = 60 * 60 * 1000;
    const dayUnit = 24 * 60 * 60 * 1000;
    const unit =
      secs < hourUnit ? 'minutes' : secs < dayUnit ? 'hours' : 'days';
    const diff = dayjs(new Date()).diff(item.time * 1000, unit);
    // 1 day, 2 days
    return `${diff} ${
      diff === 1 ? unit.substring(0, unit.length - 1) : unit
    } ago`;
  }, [item.time]);

  return (
    <article>
      <Link
        className="border flex gap-2 border-gray-200 md:p-4 p-3 rounded-md shadow-md hover:shadow-none transition-shadow h-full"
        href={`${item.url}`}
        target="_blank"
      >
        <span className="text-gray-500">{index}.</span>
        <div>
          <div className="flex gap-x-3 items-center mb-1 flex-wrap">
            <h3 className="font-bold">{item.title}</h3>
            {item.by && <span className="text-xs">Written By: {item.by}</span>}
          </div>
          <div className="flex items-center gap-x-1 text-xs text-gray-500 flex-wrap">
            <span>id: {item.id}</span> |<span>{item.score} points</span> |
            {item.time && <span>{formattedTime}</span>}
            {item.descendants > 0 ? (
              <>
                | <span>Comments: {item.descendants}</span>
              </>
            ) : null}
          </div>
          {item.text && (
            <div
              className="mt-3 text-sm"
              dangerouslySetInnerHTML={{ __html: item.text }}
            />
          )}
        </div>
      </Link>
    </article>
  );
}
