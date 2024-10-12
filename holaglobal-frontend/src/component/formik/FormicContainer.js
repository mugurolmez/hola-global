import React from 'react'

import FormikControl from './FormikControl'
import * as Yup from 'yup'
import { Form, Formik } from 'formik'
//aa

function FormicContainer() {
    const dropdownOptions = [
        { key: 'Select an option', value: '' },
        { key: 'Option1', value: 'option1' },
        { key: 'Option2', value: 'option2' },
        { key: 'Option3', value: 'option3' }

    ]
    const radioOptions = [
        { key: 'Option1', value: 'rOption1' },
        { key: 'Option2', value: 'rOption2' },
        { key: 'Option3', value: 'rOption3' }

    ]
    const checkboxOptions = [
        { key: 'Option1', value: 'cOption1' },
        { key: 'Option2', value: 'cOption2' },
        { key: 'Option3', value: 'cOption3' }

    ]
    const initialValues = {
        email: '',
        description: '',
        selectOption: '',
        radioOption: '',
        checkboxOption: '',
        birthDate: null,
        file: null

    }
    const validationSchema = Yup.object({
        email: Yup.string().required('Requried'),
        description: Yup.string().required('Required'),
        selectOption: Yup.string().required('Required'),
        radioOption: Yup.string().required('Required'),
        checkboxOption: Yup.array().required('Required'),
        birthDate: Yup.date().required('Required'),
        file: Yup.mixed().required('Required')


    })
    const onSubmit = values => {
        console.log('Form data', values)
        console.log('saved data', JSON.parse(JSON.stringify(values)))
    }

    return (
        <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
        >

            {formik => (<Form>
                <FormikControl
                    control='input'
                    type='email'
                    label='Email'
                    name='email'
                />
                <FormikControl
                    control='textarea'
                    label='Description'
                    name='description'
                />
                <FormikControl
                    control='select'
                    label='Select a topic'
                    name='selectOption'
                    options={dropdownOptions}
                />

             

                <FormikControl
                    control='radio'
                    label='Radio Topic'
                    name='radioOption'
                    options={radioOptions}
                > </FormikControl>


                <FormikControl
                    control='checkbox'
                    label='Checkbox Topic'
                    name='checkboxOption'
                    options={checkboxOptions}
                > </FormikControl>

                <FormikControl
                    control='date'
                    label='pick a  date'
                    name='birthDate'
                > </FormikControl>

                <FormikControl
                    control='imageInput'
                    label='Upload an image'
                    name='file'
                > </FormikControl>




                <button type='submit'>Submit</button>

            </Form>
            )}
        </Formik>
    )
}

export default FormicContainer