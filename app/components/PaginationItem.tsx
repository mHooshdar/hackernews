import cn from 'classnames';
import Link from 'next/link';

interface PaginationItemProps {
  text: string | number;
  disabled?: boolean;
  current?: boolean;
  className?: string;
  href: string | object;
  ariaLabel?: string;
}

export default function PaginationItem({
  text,
  disabled = false,
  current = false,
  className = '',
  ariaLabel = '',
  href = '#',
}: PaginationItemProps) {
  return (
    <li aria-label={ariaLabel}>
      <Link
        href={href}
        className={cn(
          'block py-1 px-3 border-0 transition-all duration-300 rounded-full focus:shadow-none dark:text-gray-300',
          {
            'bg-blue-600 text-white hover:text-white hover:bg-blue-600 hover:dark:bg-blue-800 shadow-md':
              current,
            'text-gray-500 pointer-events-none': disabled,
            'text-gray-800 hover:text-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 cursor-pointer':
              !disabled && !current,
          },
          className
        )}
      >
        {text}
        {current && (
          <span aria-label="hidden" className="hidden">
            (current)
          </span>
        )}
      </Link>
    </li>
  );
}
