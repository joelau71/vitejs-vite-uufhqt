import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthContext';
import i18n from '../i18n';

export function NavBar() {
  const locale = i18n.language;
  const { isAuth, setIsAuth } = useContext(AuthContext);

  const [showLanguageTrigger, setShowLanguageTrigger] = useState(false);
  const showLanguageTriggerHandle = () => {
    setShowLanguageTrigger(!showLanguageTrigger);
  };

  return (
    <div className="container px-8 py-2 mx-auto flex justify-between items-center">
      <div>
        <img src="/vite.svg" />
      </div>
      <div className="flex gap-x-4">
        {!isAuth && (
          <>
            <Link to={`${locale}/`}>Home</Link>
            <Link to={`${locale}/about`}>About</Link>
            <Link to={`${locale}/contact`}>Contact</Link>
            <Link to={`${locale}/login`}>Login</Link>
            <Link to={`${locale}/register`}>Register</Link>
          </>
        )}
        {isAuth && (
          <>
            <Link to={`${locale}/dashboard`}>Dashboard</Link>
            <Link to={`${locale}/profile`}>Profile</Link>
            <Link to={`${locale}/logout`}>Logout</Link>
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
            <ul class="text-sm text-gray-700 text-center border divide-y absolute bottom-0 left-0 bg-white translate-y-full rounded-md overflow-hidden">
              {locale != 'tc' && (
                <li
                  class="
                  px-6
                  py-2
                  cursor-pointer
                  hover:bg-gray-700 hover:text-white
                "
                >
                  <Link to="tc">繁</Link>
                </li>
              )}
              {locale != 'sc' && (
                <li
                  class="
                  px-6
                  py-2
                  cursor-pointer
                  hover:bg-gray-700 hover:text-white
                "
                >
                  <Link to="sc">簡</Link>
                </li>
              )}
              {locale != 'en' && (
                <li
                  class="
                  px-6
                  py-2
                  cursor-pointer
                  hover:bg-gray-700 hover:text-white
                "
                >
                  <Link to="en">ENG</Link>
                </li>
              )}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}
