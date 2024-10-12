import React, { useEffect } from 'react';
import { ErrorMessage, Field } from 'formik';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers';
import dayjs from 'dayjs';
import 'dayjs/locale/tr';
import 'dayjs/locale/en';
import 'dayjs/locale/ru';
import { Box } from '@mui/material';
import TextError from './TextError';
import { useTranslation } from 'react-i18next';



function MuiDatePicker(props) {
    const { t } = useTranslation();
    const { label, name, ...rest } = props;

    useEffect(() => {
        dayjs.locale(t('adapterLocale'));

    }, [t])

    return (

        <Box>
            <Field name={name}>
                {({ field, form }) => {
                    const { setFieldValue } = form;
                    const { value } = field;

                    return (
                        <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale={t('adapterLocale')}>
                            <DatePicker

                                label={label}
                                id={name}
                                helperText={<ErrorMessage name={name} component={TextError} />}
                                {...rest}
                                value={value ? dayjs(value) : null}
                                onChange={(val) => {
                                    setFieldValue(name, val ? val.format('YYYY-MM-DD') : null);
                                }}

                            />
                        </LocalizationProvider>
                    );
                }}
            </Field>


        </Box>
    );
}

export default MuiDatePicker;
