import { Card } from 'flowbite-react';

type PodcastCardComponentProps = {
  title: string;
  author: string;
  urlImage: string;
  description: string;
};

const PodcastCardComponent = ({
  title,
  author,
  urlImage,
  description,
}: PodcastCardComponentProps) => {
  return (
    <div className="max-w-xs">
      <Card>
        <div className="border-b-2 border-gray-200 pb-6 px-6">
          <img
            className="block mx-auto sm:mx-0 sm:shrink-0 rounded h-56 w-56"
            src={urlImage}
            alt="album photo"
          />
        </div>
        <div className="border-b-2 border-gray-200 pb-5">
          <h2 className="text-lg font-bold text-gray-900 leading-6" aria-label="title">
            {title}
          </h2>
          <h3 className="font-normal italic text-base text-gray-600" aria-label="author">
            {author}
          </h3>
        </div>
        <div>
          <h2 className="text-base text-gray-900 font-bold">Description:</h2>
          <h3
            className="font-normal italic text-base text-gray-600"
            aria-label="content description"
            dangerouslySetInnerHTML={{ __html: description }}
          />
        </div>
      </Card>
    </div>
  );
};

export default PodcastCardComponent;
