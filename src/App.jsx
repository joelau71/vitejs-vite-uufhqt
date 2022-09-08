import { Routes, Route, useLocation, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import PageNotFound from './pages/PageNotFound';
import i18n from './i18n';
import config from './config';
import { ProtectedRoutes } from '../ProtectedRoutes';
import { Dashboard } from './pages/Dashboard';
import { Profile } from './pages/Profile';
import { NavBar } from './components/Navbar';
import { AuthProvider } from './contexts/AuthContext';
import { UserProvider } from './contexts/UserContext';
import { Login } from './pages/Login';
import { Register } from './pages/Register';
import { PublicRoutes } from '../PublicRoutes';

function App() {
  // const localation = useLocation();
  // const url = localation.pathname.split('/');
  // const locale = url[1];
  // const locales = i18n.options.supportedLngs;
  // const { FALLBACK_LOCALE } = config;

  // if (!locales.includes(locale)) {
  //   window.location.href = '/' + FALLBACK_LOCALE;
  //   return false;
  // }

  // i18n.changeLanguage(locale);

  return (
    <div className="App">
      <AuthProvider>
        <UserProvider>
          <NavBar />
          <Routes>
            <Route element={<PublicRoutes />}>
              <Route index element={<Home />} />
              <Route path="about" element={<About />} />
              <Route path="contact" element={<Contact />} />
              <Route path="login" element={<Login />} />
              <Route path="register" element={<Register />} />
            </Route>
            <Route element={<ProtectedRoutes />}>
              <Route path="dashboard" element={<Dashboard />} />
              <Route path="profile" element={<Profile />} />
            </Route>
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </UserProvider>
      </AuthProvider>
    </div>
  );
}

export default App;
