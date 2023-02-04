import classNames from 'classnames';

interface SkeletonProps {
  width: string;
  height: string;
  className?: string;
}

export default function Skeleton({
  width,
  height,
  className = '',
}: SkeletonProps) {
  return (
    <div
      className={classNames('animate-pulse bg-gray-200 rounded-lg', className)}
      style={{ width, height }}
    />
  );
}
