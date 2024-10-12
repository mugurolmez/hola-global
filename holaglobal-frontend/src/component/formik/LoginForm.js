import React from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { Box, Button } from '@mui/material';
import FormikControl from './FormikControl';
import { useDispatch } from 'react-redux';
import { login } from '../../store/thunks/authThunks';
import TextError from './TextError';
import { useNavigate } from 'react-router-dom';

function LoginForm() {
  const dispatch = useDispatch();
  const navigate = useNavigate()

  const initialValues = {
    email: '',
    password: ''
  };

  const validationSchema = Yup.object({
    email: Yup.string().email('Invalid email format').required('Required'),
    password: Yup.string().required('Required')
  });

  const onSubmit = async (values, { setSubmitting, setFieldError }) => {
    try {
      const response = await dispatch(login(values));
      localStorage.setItem('token', response.token);
      localStorage.setItem('role', response.role);
      console.log('login başarılı')
      navigate('/dashboard');
    } catch (error) {
      setFieldError('general', error.message || 'Login failed');
    }
    setSubmitting(false);
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {({ isSubmitting, errors }) => (
        <Form>
          <Box sx={{ margin: '1rem 0' }}>
            <FormikControl
              control='muiInput'
              type='email'
              label='Email'
              name='email'
            />
          </Box>
          <Box sx={{ margin: '1rem 0' }}>
            <FormikControl
              control='muiInput'
              type='password'
              label='Password'
              name='password'
            />
          </Box>
          {errors.general && <TextError>{errors.general}</TextError>}
          <Button type='submit' disabled={isSubmitting}>
            {isSubmitting ? 'Logging in...' : 'Login'}
          </Button>
        </Form>
      )}
    </Formik>
  );
}

export default LoginForm;
