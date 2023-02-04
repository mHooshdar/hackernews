import cn from 'classnames';
import Link from 'next/link';

interface PaginationItemProps {
  text: string | number;
  disabled?: boolean;
  current?: boolean;
  className?: string;
  href: string | object;
}

export default function PaginationItem({
  text,
  disabled = false,
  current = false,
  className = '',
  href = '#',
}: PaginationItemProps) {
  return (
    <li>
      <Link
        href={href}
        className={cn(
          'page-link relative block py-1 px-3 border-0 transition-all duration-300 rounded-full focus:shadow-none',
          {
            'bg-blue-600 text-white hover:text-white hover:bg-blue-600 shadow-md':
              current,
            'text-gray-500 pointer-events-none': disabled,
            'text-gray-800 hover:text-gray-800 hover:bg-gray-200 cursor-pointer':
              !disabled,
          },
          className
        )}
      >
        {text}
        {current && <span className="hidden">(current)</span>}
      </Link>
    </li>
  );
}
