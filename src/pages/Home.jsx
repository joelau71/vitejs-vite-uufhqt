import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

function Home() {
  const { t, i18n } = useTranslation();
  return (
    <>
      <main className="bg-red-400">
        <h2>{t('Welcome to React')}</h2>
        <p>You can do this, I believe in you.</p>
      </main>
    </>
  );
}

export default Home;
