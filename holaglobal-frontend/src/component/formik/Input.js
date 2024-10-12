import { ErrorMessage, Field } from 'formik'
import React from 'react'
import TextError from './TextError'


function Input(props) {
    const {label,name,...rest}=props

  return (
    <div className='form-control'>
        <label htmlFor={name}>{label}</label>
        <Field id={name} name={name} {...rest}></Field>
        <ErrorMessage component={TextError} name={name}/>
       
    </div>
  
  )
  
}
export default Input