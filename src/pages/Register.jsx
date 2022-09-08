import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import config from '../config';
import { AuthContext } from '../contexts/AuthContext';
import i18n from '../i18n';
import { useFormik } from 'formik';
import * as Yup from 'yup';

export function Register() {
  const { setIsAuth } = useContext(AuthContext);
  const navigate = useNavigate();
  const { BACKEND_API_BASE } = config;

  const formik = useFormik({
    initialValues: {
      username: '',
      email: '',
      password: '',
      confirm_password: '',
    },
    validationSchema: Yup.object({
      username: Yup.string().required(),
      email: Yup.string()
        .email('email is inavlid')
        .required('The email is required'),
      password: Yup.string().required('The password field is required'),
      confirm_password: Yup.string()
        .oneOf([Yup.ref('password'), null], 'Passowrd must match')
        .required(),
    }),
    onSubmit: async (values, actions) => {
      const userData = {
        username: values.username,
        email: values.email,
        password: values.password,
      };

      try {
        const data = await fetch(`${BACKEND_API_BASE}/register`, {
          headers: { 'Content-Type': 'application/json' },
          method: 'POST',
          body: JSON.stringify(userData),
        });

        if (!data.ok) {
          throw 'Error......';
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
    <form className="container px-8 mx-auto" onSubmit={formik.handleSubmit}>
      <h1 className="mb-4 text-2xl text-center">Register Page</h1>
      <div className="mb-4">
        <label htmlFor="username">Username</label>
        <input
          type="text"
          id="username"
          placeholder="Username"
          className="w-full border p-2 rounded"
          value={formik.values.username}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.username}
        />
        {formik.touched.username && formik.errors.username ? (
          <div className="mt-1 text-md text-red-600">
            {formik.errors.username}
          </div>
        ) : null}
      </div>
      <div className="mb-4">
        <label htmlFor="email">Email Address</label>
        <input
          id="email"
          type="email"
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
      <div className="mb-4">
        <label htmlFor="confirm_password">Confirm Password</label>
        <input
          id="confirm_password"
          type="password"
          placeholder="Confirm Password"
          className="w-full border p-2 rounded"
          value={formik.values.confirm_password}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.confirm_password}
        />
        {formik.touched.confirm_password && formik.errors.confirm_password ? (
          <div className="mt-1 text-md text-red-600">
            {formik.errors.confirm_password}
          </div>
        ) : null}
      </div>
      <div className="text-right mt-8">
        <button
          type="submit"
          disabled={formik.isSubmitting}
          className="px-6 py-2 bg-gray-600 text-white rounded disabled:bg-red-400"
        >
          Save
        </button>
      </div>
    </form>
  );
}
