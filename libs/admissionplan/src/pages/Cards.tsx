import { get } from '@react-monorepo/config';
import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
export const Cards = () => {
  const { t } = useTranslation(['admissionplan', 'common']);
  useEffect(() => {
    get('/test')
      .then((data) => console.log(data))
      .catch((error) => console.error(error));
  }, []);
  return (
    <div className="h-screen m-1">
      <h1>{t('admissionplan:titles')}</h1>
      <Link to="home">
        <h1 className="text-[32px]">{t('common:title')}</h1>
      </Link>
    </div>
  );
};

export default Cards;
