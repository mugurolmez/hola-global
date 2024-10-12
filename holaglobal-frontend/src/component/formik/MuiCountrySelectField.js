import React, { useEffect, useRef } from 'react';
import { ErrorMessage } from 'formik';
import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import TextError from './TextError';

function MuiCountrySelectField(props) {
    const { label, name, options, ...rest } = props;

    const selectRef = useRef(null);

    useEffect(() => {
        if (selectRef.current) {
          }
    }, []);

    return (
        <div >
            <FormControl fullWidth>
                <InputLabel sx={{ color: 'black' }} htmlFor={name}>{label}</InputLabel>
                <Select select
                    id={name} name={name} label={label} {...rest}>
                    {options.map(option => (
                        <MenuItem sx={{ color: 'black' }} key={option.value} value={option.value}>
                            {option.key}
                           
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>
            <ErrorMessage name={name} component={TextError} />
        </div>
    );
}

export default MuiCountrySelectField;
