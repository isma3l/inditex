type AudioControlComponentPros = {
  url: string;
};

const AudioControlComponent = ({ url }: AudioControlComponentPros) => {
  return (
    <audio controls className="pt-5 w-full">
      <source src={url} type="audio/ogg" />
      <source src={url} type="audio/mpeg" />
      <source src={url} type="audio/mp3" />
      Your browser dont support the audio format
    </audio>
  );
};

export default AudioControlComponent;
