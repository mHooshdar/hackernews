'use client';

import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import PaginationItem from './PaginationItem';

interface PaginationProps {
  pagesCount: number;
  size?: number;
}

export default function Pagination({ pagesCount, size = 3 }: PaginationProps) {
  const searchParams = useSearchParams();
  const [currentPage, setCurrentPage] = useState(
    +(searchParams.get('page') ?? 1)
  );
  const pages = Array.from({ length: size }).map((_, i) => {
    const pageNum = i - Math.floor(size / 2) + currentPage;
    return pageNum >= 1 && pageNum <= pagesCount ? pageNum : null;
  });

  function resolveRoute(page: number) {
    return {
      query: { page },
    };
  }

  useEffect(() => {
    const nextPage = searchParams.get('page');
    setCurrentPage(+(nextPage ?? 0));
  }, [searchParams]);

  return (
    <div className="flex justify-center">
      <nav aria-label="Page navigation">
        <ul className="flex list-style-none">
          {(pages[0] || -1) > 1 && (
            <PaginationItem href={resolveRoute(1)} className="mx-1" text="1" />
          )}
          {!pages.includes(2) && (
            <>
              ...
              <PaginationItem
                href={resolveRoute(currentPage - 1)}
                className="mx-1 disabled"
                text="<"
              />
            </>
          )}
          {pages.map(
            (page, i) =>
              page && (
                <PaginationItem
                  key={i}
                  className="mx-1"
                  text={page}
                  current={page === currentPage}
                  href={resolveRoute(page)}
                />
              )
          )}
          {!pages.includes(pagesCount - 1) && (
            <>
              <PaginationItem
                href={resolveRoute(currentPage + 1)}
                className="mx-1 disabled"
                text=">"
              />
              ...
            </>
          )}
          {(pages[pages.length - 1] || pagesCount) < pagesCount && (
            <PaginationItem
              href={resolveRoute(pagesCount)}
              className="mx-1"
              text={pagesCount}
            />
          )}
        </ul>
      </nav>
    </div>
  );
}
