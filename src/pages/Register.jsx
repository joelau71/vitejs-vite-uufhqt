import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import config from '../config';
import { AuthContext } from '../contexts/AuthContext';
import { UserContext } from '../contexts/UserContext';
import i18n from '../i18n';

export function Register() {
  const { user, setUser } = useContext(UserContext);
  const { setIsAuth } = useContext(AuthContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  const navigate = useNavigate();
  const locale = i18n.language;
  const { BACKEND_API_BASE } = config;

  // fetch(`${BACKEND_API_BASE}/users`)
  //   .then((res) => res.json())
  //   .then((res) => console.log(res));

  const saveHandle = async () => {
    const data = {
      username,
      email,
      password,
    };

    const res = await fetch(`${BACKEND_API_BASE}/register`, {
      headers: { 'Content-Type': 'application/json' },
      method: 'POST',
      body: JSON.stringify(data),
    });

    console.log(res);

    //ignore validate
    // setUser({
    //   username: username,
    //   email: email,
    //   password: password,
    // });

    //setIsAuth(true);

    //navigate(`/${locale}/dashboard`);
  };
  return (
    <div className="containerf px-8 mx-auto">
      <h1 className="mb-4 text-2xl text-center">Register Page</h1>
      <div className="mb-4">
        <input
          type="text"
          value={username}
          placeholder="Name"
          onChange={(e) => setUsername(e.target.value)}
          className="w-full border p-2 rounded"
        />
      </div>
      <div className="mb-4">
        <input
          type="email"
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
          onClick={() => saveHandle()}
          className="px-6 py-2 bg-gray-600 text-white rounded"
        >
          Save
        </button>
      </div>
    </div>
  );
}
