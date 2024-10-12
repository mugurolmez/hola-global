import * as Yup from 'yup';

export const useMainUserFormItems = () => {

  const roleOptions=[
    {id:0, value:'ADMIN'},
 
  ]
  
  return [
    {
      id: 0,
      control: 'muiInput',
      type: 'email',
      label: 'email',
      name: 'email',
      validationSchema: Yup.string().required('email gerekli')
    },
    {
      id: 1,
      control: 'muiInput',
      type: 'name',
      label: 'name',
      name: 'name',
      validationSchema: Yup.string().required('isim gerekli')
    },
    {
      id: 2,
      control: 'muiInput',
      type: 'phoneNumber',
      label: 'phoneNumber',
      name: 'phoneNumber',
      validationSchema: Yup.string()
      .required('telefon numarası gerekli')
      .matches(/^05\d{9}$/, 'Telefon numarası formatı 05xx xxx xx xx şeklinde olmalıdır'),
   },
    {
      id: 3,
      control: 'muiInput',
      type: 'password',
      label: 'password',
      name: 'password',
      validationSchema: Yup.string().required('password required')
    },
    {
      id: 4,
      control: 'muiSelectField',
      type: 'role',
      label: 'role',
      name: 'role',
      options: roleOptions,
      validationSchema: Yup.string().required('role required')
    },
  ];
};
