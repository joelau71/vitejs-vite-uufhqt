import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import Banner from '../components/Banner';

function Home() {
  const { t } = useTranslation();

  return (
    <>
      <Banner />
      <main className="bg-red-400">
        <h2>{t('Welcome to React')}</h2>
        <p>You can do this, I believe in you.</p>
      </main>
    </>
  );
}

export default Home;
