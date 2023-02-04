import Skeleton from './Skeleton';

export default function StorySkeleton() {
  return (
    <div className="border flex gap-2 border-gray-200 dark:border-gray-600 md:p-4 p-3 rounded-md shadow-md hover:shadow-none transition-shadow h-full">
      <Skeleton width="30px" height="20px" />
      <div className="w-full">
        <div className="w-full flex gap-1 mb-2">
          <Skeleton width="60%" height="20px" />
          <Skeleton width="30%" height="20px" />
        </div>
        <div className="w-full flex gap-1">
          <Skeleton width="10%" height="15px" />
          <Skeleton width="15%" height="15px" />
          <Skeleton width="20%" height="15px" />
        </div>
      </div>
    </div>
  );
}
