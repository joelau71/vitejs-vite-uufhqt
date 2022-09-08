import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

function About() {
  const { t } = useTranslation();
  return (
    <>
      <div>{t('about page content')}</div>
      <div>About page</div>
    </>
  );
}

export default About;
