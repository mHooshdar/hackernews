'use client';

import { useEffect, useState } from 'react';
import myFetch from '@utils/myFetch';
import Story from './Story';
import type { StoryDTO, TopStoriesDTO } from '../types';
import { Loading } from './Loading';

export default function List() {
  const [stories, setStories] = useState<StoryDTO[]>([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    async function getTopStoryDetail(id: number) {
      return myFetch<StoryDTO>(`/item/${id}.json`);
    }

    async function getTopStoriesData() {
      setLoading(true);
      const ids = await myFetch<TopStoriesDTO>('/topstories.json');
      const values = await Promise.all(
        ids.reduce<Promise<StoryDTO>[]>(
          (prev, curr, index) =>
            index < 10 ? [...prev, getTopStoryDetail(curr)] : [...prev],

          []
        )
      );
      setLoading(false);
      setStories(values);
    }
    getTopStoriesData();
  }, []);

  return (
    <div>
      {loading ? (
        <Loading />
      ) : (
        stories.map(story => <Story item={story} key={story.id} />)
      )}
    </div>
  );
}
