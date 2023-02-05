'use client';

import { useEffect, useState } from 'react';
import cn from 'classnames';
import myFetch from '@utils/myFetch';
import { useSearchParams } from 'next/navigation';
import Story from './Story';
import type { StoryDTO, TopStoriesDTO } from '../types';
import StorySkeleton from './StorySkeleton';
import Pagination from './Pagination';

export default function List({ className = '' }) {
  const searchParams = useSearchParams();
  const pageSize = 10;
  const page = +(searchParams.get('page') || 1);
  const startIndex = pageSize * (page - 1);

  const [stories, setStories] = useState<StoryDTO[]>([]);
  const [loading, setLoading] = useState(true);
  const [totalIds, setTotalIds] = useState<TopStoriesDTO>([]);
  const [totalPage, setTotalPage] = useState(0);

  useEffect(() => {
    async function getTopStoriesData() {
      const ids = await myFetch<TopStoriesDTO>('/topstories.json');
      setTotalIds(ids);
      setTotalPage(ids.length / pageSize);
    }
    getTopStoriesData();
  }, []);

  useEffect(() => {
    async function getTopStoryDetail() {
      setLoading(true);
      const values = await Promise.all(
        totalIds.reduce<Promise<StoryDTO>[]>(
          (prev, curr, index) =>
            index >= startIndex && index < startIndex + pageSize
              ? [...prev, myFetch<StoryDTO>(`/item/${curr}.json`)]
              : [...prev],
          []
        )
      );
      setLoading(false);
      setStories(values);
    }
    getTopStoryDetail();
  }, [totalIds, page, startIndex]);

  return (
    <>
      <div className={cn('grid md:grid-cols-2 gap-2', className)}>
        {loading || !stories.length
          ? Array(pageSize)
              .fill(0)
              .map((_, index) => <StorySkeleton key={index} />)
          : stories.map((story, index) => (
              <Story
                item={story}
                index={startIndex + index + 1}
                key={story.id}
              />
            ))}
      </div>
      {!loading && stories.length && <Pagination pagesCount={totalPage} />}
    </>
  );
}
