type TotalEpisodesProps = {
  total: number;
};

const TotalEpisodesComponent = ({ total }: TotalEpisodesProps) => {
  return (
    <div className="px-6 py-2 border border-gray-100 rounded-sm shadow-lg mb-4">
      <span className="font-bold text-lg">Episodes: {total}</span>
    </div>
  );
};

export default TotalEpisodesComponent;
