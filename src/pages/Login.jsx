import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import config from '../config';
import { AuthContext } from '../contexts/AuthContext';
import { UserContext } from '../contexts/UserContext';
import i18n from '../i18n';

export function Login() {
  const { user, setUser } = useContext(UserContext);
  const { setIsAuth } = useContext(AuthContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const locale = i18n.language;
  const { BACKEND_API_BASE } = config;

  const loginHandle = async () => {
    const data = {
      email,
      password,
    };

    const data = await fetch(`${BACKEND_API_BASE}/login`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });
    const json = await data.json();
      .then((res) => res.json())
      .then((data) => console.log(data));
    //ignore validate
    // setUser({
    //   email: email,
    //   password: password,
    // });
    // setIsAuth(true);
    // navigate(`/${locale}/dashboard`);
  };
  return (
    <div className="containerf px-8 mx-auto">
      <h1 className="mb-4 text-2xl text-center">Login Page</h1>
      <div className="mb-4">
        <input
          type="text"
          value={email}
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
          className="w-full border p-2 rounded"
        />
      </div>
      <div>
        <input
          type="password"
          value={password}
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
          className="w-full border p-2 rounded"
        />
      </div>
      <div className="text-right mt-8">
        <button
          onClick={loginHandle}
          className="px-6 py-2 bg-gray-600 text-white rounded"
        >
          Login
        </button>
      </div>
    </div>
  );
}
