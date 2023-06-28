import { SkeletonLoaderComponent } from '@/shared/components';

const DetailsSqueletonComponent = () => {
  return (
    <SkeletonLoaderComponent className="flex w-full py-6 justify-between">
      <div className="flex flex-col ml-8 gap-3 items-center">
        <div className="h-52 w-52 rounded-sm bg-gray-200 flex-shrink-0"></div>
        <div className="w-60 h-px bg-gray-200 rounded-md"></div>
        <div className="w-48 h-4 bg-gray-200 rounded-md"></div>
        <div className="w-48 h-2 bg-gray-200 rounded-md"></div>
        <div className="w-48 h-2 bg-gray-200 rounded-md"></div>
        <div className="w-60 h-px bg-gray-200 rounded-md"></div>
        <div className="w-48 h-4 bg-gray-200 rounded-md"></div>
        <div className="w-48 h-2 bg-gray-200 rounded-md"></div>
        <div className="w-48 h-2 bg-gray-200 rounded-md"></div>
        <div className="w-48 h-2 bg-gray-200 rounded-md"></div>
        <div className="w-48 h-2 bg-gray-200 rounded-md"></div>
      </div>
      <div className="w-8/12 flex flex-col">
        <div className="flex gap-2">
          <div className="w-32 h-6 bg-gray-200 rounded-md"></div>
          <div className="w-12 bg-gray-200 rounded-md"></div>
        </div>
        <div className="flex flex-col pt-8 pb-4">
          <div className="flex w-full">
            <div className="flex w-8/12 ">
              <div className="w-24 h-4 bg-gray-200 rounded-md"></div>
            </div>
            <div className="flex w-2/12">
              <div className="w-12 h-4 bg-gray-200 rounded-md"></div>
            </div>
            <div className="flex w-2/12 justify-center">
              <div className="w-16 h-4 bg-gray-200 rounded-md"></div>
            </div>
          </div>
        </div>

        {Array(8)
          .fill(0)
          .map((_: number, index: number) => {
            return (
              <div className="flex flex-col" key={index}>
                <div className="flex w-full border-y">
                  <div className="flex w-8/12 py-3">
                    <div className="w-80 h-4 bg-gray-200 rounded-md"></div>
                  </div>
                  <div className="flex w-2/12 py-3">
                    <div className="w-20 h-4 bg-gray-200 rounded-md"></div>
                  </div>
                  <div className="flex w-2/12 py-3 justify-center">
                    <div className="w-20 h-4 bg-gray-200 rounded-md"></div>
                  </div>
                </div>
              </div>
            );
          })}
      </div>

      {/*       <div className="mt-10 grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-y-32 justify-items-center">
        {Array(12)
          .fill(0)
          .map((_item: number, index: number) => {
            return (
              <div
                className="flex flex-col w-40 gap-2 items-center"
                key={index}
              >
                <div className="rounded-full flex-shrink-0  w-36 h-36 bg-gray-200"></div>
                <div className="h-5 w-36 bg-gray-200 flex-shrink-0"></div>
                <div className="h-4 w-36 bg-gray-200 flex-shrink-0"></div>
              </div>
            );
          })}
      </div> */}
    </SkeletonLoaderComponent>
  );
};

export default DetailsSqueletonComponent;
