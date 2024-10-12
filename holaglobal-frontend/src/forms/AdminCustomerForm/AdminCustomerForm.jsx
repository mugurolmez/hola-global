import React, { useState } from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { Box, Button, ThemeProvider, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { useMainCustomerFormItems } from './AdminCustomerFormItem';
import { mainAppStyles } from '../../appStyles';
import FormikControl from '../../component/formik/FormikControl';
import { useDispatch } from 'react-redux';
import { addCustomer, getAllCustomer } from '../../store/thunks/customerThunk';
import { theme } from '../../component/Theme';



const AdminCustomerForm = ({ onClose }) => {
    const { t } = useTranslation();
    const mainCustomerFormItems = useMainCustomerFormItems();
    const dispatch = useDispatch();
    const [submitError, setSubmitError] = useState(null);

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
            onClose();  // Sadece başarılı ise formu kapat
        } catch (error) {
            setSubmitError(error.message || 'Müşteri Ekleme Hatası');
        }
        setSubmitting(false);
    };

    return (
        <ThemeProvider theme={theme}>
            <Box sx={mainAppStyles.formBox}>
                <Formik
                    initialValues={initialValues}
                    validationSchema={Yup.object(validationSchema)}
                    onSubmit={onSubmit}
                >
                    {formik => (
                        <Box >


                            <Box >
                                <Form>
                                    <Typography variant='h5'>Müşteri Ekleme Formu</Typography>
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
                                        <Typography  >{submitError}</Typography>
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
                        </Box>
                    )}
                </Formik>
            </Box>
        </ThemeProvider>
    );
};

export default AdminCustomerForm;
