import { ReactNode } from 'react';

type SkeletonLoaderProps = {
  children: ReactNode;
  className: string;
};

const SkeletonLoaderComponent = ({ children, className }: SkeletonLoaderProps) => {
  return <div className={['animate-pulse', className].join(' ')}>{children}</div>;
};

export default SkeletonLoaderComponent;
