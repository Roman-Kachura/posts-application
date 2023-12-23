'use client'

import { Formik } from 'formik';
import styles from '@/styles/auth.module.scss';
import { AuthField } from '@/components/auth/AuthField';
import { LoginErrors, LoginValues } from '@/types/types';
import { setUser } from '@/store/store';


export const LoginForm = () => {
  const initialValues: LoginValues = { email: '', password: '' }
  return (
    <Formik
      initialValues={initialValues}
      validate={values => {
        const errors: LoginErrors = {}
        if (!values.email) {
          errors.email = 'Required';
        } else if (
          !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
        ) {
          errors.email = 'Invalid email address';
        } else {
          delete errors.email;
        }

        if (values.password.length < 5) {
          errors.password = 'Password length cannot be less than 5'
        } else {
          delete errors.password;
        }
        return errors;
      }}
      onSubmit={(values, {setSubmitting}) => {
        setUser(values)
        setSubmitting(true);
      }}
    >
      {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
        }) => {
        return (
          <form className={styles.loginForm} onSubmit={handleSubmit}>
            <AuthField
              id={'email'}
              type={'email'}
              value={values.email}
              handleChange={handleChange}
              handleBlur={handleBlur}
              error={errors.email && touched.email && errors.email}
              required
            />
            <AuthField
              id={'password'}
              type={'password'}
              value={values.password}
              handleChange={handleChange}
              handleBlur={handleBlur}
              error={errors.password && touched.password && errors.password}
              required
            />
            <button className={styles.authFieldBtn} type="submit" disabled={isSubmitting}>
              Login
            </button>
          </form>
        )
      }}
    </Formik>
  )
}