import { Link, Outlet } from 'react-router-dom';
import { RootProvider } from '@react-monorepo/config';

export const Main = () => {
  return (
    <RootProvider>
      <div style={{ display: 'flex', gap: '20px' }}>
        <Link to="/">
          <h1>Admission Plan</h1>
        </Link>
        <Link to="/ttq">
          <h1>TTQ</h1>
        </Link>
      </div>
      <Outlet />
    </RootProvider>
  );
};
