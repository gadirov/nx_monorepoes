import { useTranslation } from 'react-i18next';
export const Cards = () => {
  const { t } = useTranslation(['admissionplan', 'common']);
  return (
    <div>
      <h1>{t('admissionplan:titles')}</h1>
      <h1>{t('common:title')}</h1>
    </div>
  );
};

export default Cards;
