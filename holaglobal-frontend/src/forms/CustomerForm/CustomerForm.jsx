import React, { useState } from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { Box, Button, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { useMainCustomerFormItems } from './CustomerFormItem';
import FormikControl from '../../component/formik/FormikControl';
import { useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addCustomer, getAllCustomer } from '../../store/thunks/customerThunk';



const CustomerForm = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const [submitError, setSubmitError] = useState(null);
  const location = useLocation();

  const formTitle = location.pathname.includes('foreing-health-insurance')
    ? t('formTitleInsurance')
    : t('formTitleQuick');

  const mainCustomerFormItems = useMainCustomerFormItems();

  const initialValues = mainCustomerFormItems.reduce((acc, item) => {
    acc[item.name] = '';
    return acc;
  }, {});

  const validationSchema = mainCustomerFormItems.reduce((acc, item) => {
    acc[item.name] = item.validationSchema;
    return acc;
  }, {});

  const onSubmit = async (values, { setSubmitting, resetForm }) => {
    setSubmitError(null);  // Önceki hatayı sıfırla
    try {
      await dispatch(addCustomer(values));
      await dispatch(getAllCustomer())

      resetForm();
    } catch (error) {
      setSubmitError(error.message || 'Müşteri Ekleme Hatası');
    }
    setSubmitting(false);
  };

  return (

    <Box >
      <Formik
        initialValues={initialValues}
        validationSchema={Yup.object(validationSchema)}
        onSubmit={onSubmit}
      >
        {formik => {

          return (
            <Box>
              <Form>
                <Typography variant='h4'>{formTitle}</Typography>
                {mainCustomerFormItems.map(item => (
                  <FormikControl
                    key={item.id}
                    control={item.control}
                    type={item.type}
                    label={t(item.label)}
                    name={item.name}
                    options={item.options}
                  />
                ))}
                {submitError && (
                  <Typography color="error">{submitError}</Typography>

                )}

                <Button type='submit' disabled={formik.isSubmitting}>
                  {formik.isSubmitting ? (

                    t('sendingButton')

                  ) : (
                    t('submitButton')
                  )}
                </Button>


              </Form>
            </Box>
          );

        }}
      </Formik>
    </Box>

  );
};

export default CustomerForm;
