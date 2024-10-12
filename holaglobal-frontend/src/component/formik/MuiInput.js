import React from 'react';
import { Box, TextField } from '@mui/material';
import { Field, ErrorMessage } from 'formik';
import TextError from './TextError';

function MuiInput(props) {
  const { label, name, ...rest } = props;

  return (
    <Box >
      <Field name={name}>
        {({ field, form }) => (
          <div>
            <TextField
              id={name}
              label={label}
              {...field}
              {...rest}
              error={form.errors[name] && form.touched[name]}
            />
            <ErrorMessage name={name} component={TextError} />
          </div>
        )}
      </Field>
    </Box>
  );
}

export default MuiInput;
