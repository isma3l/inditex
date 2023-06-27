import { Outlet } from 'react-router-dom';
import { Header } from '@/shared/components';

const LayoutPage = () => {
  return (
    <div className="w-10/12 mx-auto">
      <Header />
      <Outlet />
    </div>
  );
};

export default LayoutPage;
