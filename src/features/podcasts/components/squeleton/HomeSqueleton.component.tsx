import { SkeletonLoaderComponent } from '@/shared/components';

const HomeSqueletonComponent = () => {
  return (
    <SkeletonLoaderComponent className="flex flex-col gap-2 my-2 w-full">
      <div className="flex w-full justify-end items-center">
        <div className="h-7 w-12 rounded-full bg-gray-200 flex-shrink-0"></div>
        <div className="w-60 h-10 bg-gray-200 rounded-md ml-6"></div>
      </div>
      <div className="mt-10 grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-y-32 justify-items-center">
        {Array(12)
          .fill(0)
          .map((_item: number, index: number) => {
            return (
              <div className="flex flex-col w-40 gap-2 items-center" key={index}>
                <div className="rounded-full flex-shrink-0  w-36 h-36 bg-gray-200"></div>
                <div className="h-6 w-40 bg-gray-200 border flex-shrink-0"></div>
                <div className="h-4 w-48 bg-gray-200 flex-shrink-0"></div>
                <div className="h-4 w-48 bg-gray-200 flex-shrink-0"></div>
              </div>
            );
          })}
      </div>
    </SkeletonLoaderComponent>
  );
};

export default HomeSqueletonComponent;
