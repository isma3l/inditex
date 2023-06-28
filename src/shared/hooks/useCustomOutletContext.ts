import { useOutletContext } from 'react-router-dom';

export function useCustomOutletContext<T>() {
  return useOutletContext<T>();
}
