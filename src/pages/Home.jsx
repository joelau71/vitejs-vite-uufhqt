import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import config from '../config';

function Home() {
  const { t, i18n } = useTranslation();
  const { BACKEND_API_BASE } = config;
  const token = JSON.parse(localStorage.getItem('token'));

  fetch(`${BACKEND_API_BASE}/600/users/1`, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
    .then((res) => res.json())
    .then((res) => console.log(res));
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
