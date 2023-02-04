'use client';

import { Inter } from '@next/font/google';
import { useEffect, useState } from 'react';
import { Loading } from '../components/Loading';
import StoryDetail from './components/StoryDetail';
import type { StoryDTO } from '../types';
import myFetch from '../utils/myFetch';

const inter = Inter({ subsets: ['latin'] });

interface PageCtx {
  params: { id: number };
}

export default function Detail({ params }: PageCtx) {
  const [story, setStory] = useState<StoryDTO>();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function getTopStoryDetail(id: number) {
      setLoading(true);
      const res = await myFetch<StoryDTO>(`/item/${id}.json`);
      setLoading(false);
      setStory(res);
    }
    getTopStoryDetail(params.id);
  }, [params.id]);

  return (
    <main className={inter.className}>
      <div>
        {loading || !story ? <Loading /> : <StoryDetail item={story} />}
      </div>
    </main>
  );
}
