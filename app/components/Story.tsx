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

  const Component = item.url ? Link : 'div';

  return (
    <article aria-label="news">
      <Component
        className="border flex gap-2 border-gray-200 dark:border-gray-600 md:p-4 p-3 rounded-md shadow-md hover:shadow-none transition-shadow h-full"
        href={item.url}
        target="_blank"
      >
        <span className="text-gray-500 dark:text-gray-400">{index}.</span>
        <div>
          <div className="flex gap-x-3 items-center mb-1 flex-wrap">
            <h3 aria-label="title" className="dark:text-gray-100 font-bold">
              {item.title}
            </h3>
            {item.by && (
              <span aria-label="writer" className="text-xs dark:text-gray-300">
                Written By: {item.by}
              </span>
            )}
          </div>
          <div className="flex items-center gap-x-1 text-xs text-gray-500 dark:text-gray-400 flex-wrap">
            <span aria-label="id">id: {item.id}</span> |
            <span aria-label="score">{item.score} points</span> |
            {item.time && <span aria-label="time">{formattedTime}</span>}
            {item.descendants > 0 ? (
              <>
                |{' '}
                <span aria-label="comments">Comments: {item.descendants}</span>
              </>
            ) : null}
          </div>
          {item.text && (
            <div
              className="mt-3 text-sm dark:text-gray-300"
              aria-label="text"
              dangerouslySetInnerHTML={{ __html: item.text }}
            />
          )}
        </div>
      </Component>
    </article>
  );
}
