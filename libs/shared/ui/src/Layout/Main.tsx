import { Link, Outlet } from 'react-router-dom';
import { i18nInstance, RootProvider } from '@react-monorepo/config';

export const Main = () => {
  const changeLAnguage = (lang: string) => {
    document.documentElement.setAttribute('lang', lang);
    i18nInstance.changeLanguage(lang);
  };

  return (
    <RootProvider>
      <ul>
        <li onClick={() => changeLAnguage('az')}>AZ</li>
        <li onClick={() => changeLAnguage('en')}>EN</li>
        <li onClick={() => changeLAnguage('ru')}> RU</li>
      </ul>
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
