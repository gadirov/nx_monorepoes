import { Link, Outlet } from 'react-router-dom';
import { ProtectedRoutes, RootProvider } from '@react-monorepo/config';
import { i18nInstance } from '@react-monorepo/config';
import { Switch } from '@nextui-org/react';
import { useState, useCallback } from 'react';

export const Main = () => {
  const [isSelected, setIsSelected] = useState(false);
  const theme = isSelected ? 'dark' : 'light';
  const changeLanguage = useCallback((lang: string) => {
    document.documentElement.setAttribute('lang', lang);
    i18nInstance.changeLanguage(lang);
  }, []);

  return (
    <RootProvider>
      <main
        className={`${theme} bg-background text-foreground transition-all duration-300`}
      >
        <Switch
          isSelected={isSelected}
          onChange={() => setIsSelected(!isSelected)}
        />
        <ul>
          {['az', 'en', 'ru'].map((lang) => (
            <li
              key={lang}
              onClick={() => changeLanguage(lang)}
              className="cursor-pointer text-[20px]"
            >
              {lang.toUpperCase()}
            </li>
          ))}
        </ul>
        <hr />
        <div>
          <Link to="/admission-plan">
            <h1 className="text-[20px] text-primary bg-primary-background  p-3 rounded-md ">
              Admission Plan
            </h1>
            <hr />
          </Link>
          <Link to="/ttq">
            <ProtectedRoutes roles={['view-applications']}>
              <h1 className="text-lg text-primary bg-primary-background p-3 rounded-md w-full">
                TTQ
              </h1>
            </ProtectedRoutes>
          </Link>
        </div>
        <Outlet />
      </main>
    </RootProvider>
  );
};
