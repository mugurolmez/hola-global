import React from 'react';
import Textarea from './Textarea';
import Input from './Input';
import Select from './Select';
import RadioButtons from './RadioButtons';
import CheckboxGroup from './CheckboxGroup';
import MuiInput from './MuiInput';
import MuiSelectField from './MuiSelectField';
import MuiCountrySelectField from './MuiCountrySelectField';
import MuiDatePicker from './MuiDatePicker';



function FormikControl(props) {
    const { control, ...rest } = props;

    switch (control) {
        case 'input':
            return <Input {...rest} />
        case 'textarea':
            return <Textarea {...rest} />
        case 'select':
            return <Select {...rest} />
        case 'radio':
            return <RadioButtons {...rest} />
        case 'checkbox':
            return <CheckboxGroup {...rest} />
        case 'muiDatePicker':
            return <MuiDatePicker {...rest} />
        case 'muiInput':
            return <MuiInput {...rest} />
        case 'muiSelectField':
            return <MuiSelectField {...rest} />;
        case 'muiCountrySelectField':
            return <MuiCountrySelectField {...rest} />
        default:
            return null;
    }
}

export default FormikControl;
