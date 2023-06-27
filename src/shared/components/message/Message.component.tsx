type MessageComponentProps = {
  message: string;
};
const MessageComponent = ({ message }: MessageComponentProps) => {
  return <div className="w-full h-full p-6 font-bold">{message}</div>;
};

export default MessageComponent;
