import { useTranslation } from 'react-i18next';

function PageNotFound() {
  const { t, i18n } = useTranslation();
  return (
    <div className="fixed inset-0 bg-blue-800 text-white flex items-center justify-center">
      {t('404 Page Not Found')}
    </div>
  );
}

export default PageNotFound;
