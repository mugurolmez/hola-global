import React, { useState } from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { Box, Button, ThemeProvider, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { mainAppStyles } from '../../appStyles';
import FormikControl from '../../component/formik/FormikControl';
import { useDispatch } from 'react-redux';
import { useMainUserFormItems } from './AdminUserFormItem';
import { register } from '../../store/thunks/authThunks';
import { getAllUser } from '../../store/thunks/userThunks';
import { theme } from '../../component/Theme';



const AdminUserForm = ({ onClose }) => {
    const { t } = useTranslation();
    const mainUserFormItems = useMainUserFormItems();
    const dispatch = useDispatch();
    const [submitError, setSubmitError] = useState(null);

    const initialValues = mainUserFormItems.reduce((acc, item) => {
        acc[item.name] = '';
        return acc;
    }, {});

    const validationSchema = mainUserFormItems.reduce((acc, item) => {
        acc[item.name] = item.validationSchema;
        return acc;
    }, {});

    const onSubmit = async (values, { setSubmitting, resetForm }) => {
        setSubmitError(null);  // Önceki hatayı sıfırla
        try {
            await dispatch(register(values));
            await dispatch(getAllUser())
            resetForm();
            onClose();  // Sadece başarılı ise formu kapat
        } catch (error) {
            setSubmitError(error.message || 'Kullanıcı Ekleme Hatası');
        }
        setSubmitting(false);
    };

    return (
        <ThemeProvider theme={theme}>
            <Box>
                <Formik
                    initialValues={initialValues}
                    validationSchema={Yup.object(validationSchema)}
                    onSubmit={onSubmit}
                >
                    {formik => (
                        <Box sx={mainAppStyles.formBox}>
                            <Form>
                                <Typography variant='h5' >Kullanıcı Ekleme Formu</Typography>
                                {mainUserFormItems.map(item => (
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
                    )}
                </Formik>
            </Box>
        </ThemeProvider>
    );
};

export default AdminUserForm;
