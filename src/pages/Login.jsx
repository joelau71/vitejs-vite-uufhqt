import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import config from '../config';
import { AuthContext } from '../contexts/AuthContext';
import { UserContext } from '../contexts/UserContext';
import { useFormik } from 'formik';
import * as Yup from 'yup';

export function Login() {
  const { user, setUser } = useContext(UserContext);
  const { setIsAuth } = useContext(AuthContext);
  const navigate = useNavigate();
  const { BACKEND_API_BASE } = config;

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email('email is inavlid')
        .required('The email is required'),
      password: Yup.string().required('The password field is required'),
    }),
    onSubmit: async (values, actions) => {
      //console.log(values, actions);
      try {
        const data = await fetch(`${BACKEND_API_BASE}/login`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(values),
        });
        if (!data.ok) {
          throw '401 Error';
        }
        const json = await data.json();
        const token = json.accessToken;
        const id = json.user.id;
        localStorage.setItem('token', JSON.stringify(token));
        localStorage.setItem('id', JSON.stringify(id));
        setIsAuth(true);
        navigate('/dashboard');
      } catch (e) {
        console.log(e);
      }
    },
  });

  return (
    <form className="containerf px-8 mx-auto" onSubmit={formik.handleSubmit}>
      <h1 className="mb-4 text-2xl text-center">Login Page</h1>
      <div className="mb-4">
        <label htmlFor="email">Email Address</label>
        <input
          id="email"
          type="text"
          placeholder="Email"
          className="w-full border p-2 rounded"
          value={formik.values.email}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.email}
        />
        {formik.touched.email && formik.errors.email ? (
          <div className="mt-1 text-md text-red-600">{formik.errors.email}</div>
        ) : null}
      </div>
      <div className="mb-4">
        <label htmlFor="password">Password</label>
        <input
          id="password"
          type="password"
          placeholder="Password"
          className="w-full border p-2 rounded"
          value={formik.values.password}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.password}
        />
        {formik.touched.password && formik.errors.password ? (
          <div className="mt-1 text-md text-red-600">
            {formik.errors.password}
          </div>
        ) : null}
      </div>
      {/* <pre>is submitting: {JSON.stringify(formik, null, 2)}</pre> */}

      <div className="text-right mt-8">
        <button
          type="submit"
          disabled={formik.isSubmitting}
          className="px-6 py-2 bg-gray-600 text-white rounded disabled:bg-red-400"
        >
          Submit
        </button>
      </div>
    </form>
  );
}
