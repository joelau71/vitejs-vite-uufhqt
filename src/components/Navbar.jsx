import { changeLanguage } from 'i18next';
import { useContext, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthContext';
import i18n from '../i18n';

export function NavBar() {
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();
  const location = useLocation();
  const locale = i18n.language;
  const { isAuth, setIsAuth } = useContext(AuthContext);

  console.log(location);

  const [showLanguageTrigger, setShowLanguageTrigger] = useState(false);
  const showLanguageTriggerHandle = () => {
    setShowLanguageTrigger(!showLanguageTrigger);
  };

  const changeLanguageHandle = (locale) => {
    i18n.changeLanguage(locale);
    setShowLanguageTrigger(false);
  };

  const logoutHandle = () => {
    localStorage.clear();
    setIsAuth(false);
  };

  return (
    <div className="container px-8 py-2 mx-auto flex justify-between items-center">
      <div>
        <Link to="/">
          <img src="/vite.svg" />
        </Link>
      </div>
      <div className="flex gap-x-4">
        {!isAuth && (
          <>
            <Link to="/">Home</Link>
            <Link to="about">About</Link>
            <Link to="contact">Contact</Link>
            <Link to="login">Login</Link>
            <Link to="register">Register</Link>
          </>
        )}
        {isAuth && (
          <>
            <Link to="dashboard">Dashboard</Link>
            <Link to="profile">Profile</Link>
            <div className="cursor-pointer" onClick={logoutHandle}>
              Logout
            </div>
          </>
        )}

        <div className="relative">
          <div
            className="material-icons cursor-pointer"
            onClick={showLanguageTriggerHandle}
          >
            language
          </div>
          {showLanguageTrigger && (
            <ul className="text-sm text-gray-700 text-center border divide-y absolute bottom-0 left-0 bg-white translate-y-full rounded-md overflow-hidden">
              {locale != 'tc' && (
                <li
                  className="
                  px-6
                  py-2
                  cursor-pointer
                  hover:bg-gray-700 hover:text-white
                "
                >
                  <div onClick={() => changeLanguageHandle('tc')}>繁</div>
                </li>
              )}
              {locale != 'sc' && (
                <li
                  className="
                  px-6
                  py-2
                  cursor-pointer
                  hover:bg-gray-700 hover:text-white
                "
                >
                  <div onClick={() => changeLanguageHandle('sc')}>簡</div>
                </li>
              )}
              {locale != 'en' && (
                <li
                  className="
                  px-6
                  py-2
                  cursor-pointer
                  hover:bg-gray-700 hover:text-white
                "
                >
                  <div onClick={() => changeLanguageHandle('en')}>ENG</div>
                </li>
              )}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}
