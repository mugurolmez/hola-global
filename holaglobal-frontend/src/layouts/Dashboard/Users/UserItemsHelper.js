import * as Yup from 'yup';
import { createSelector } from 'reselect';
import { deleteUser, getAllUser, updateUser } from '../../../store/thunks/userThunks';


export const stateOptions = ['Beklemede', 'Onaylandı', 'İptal'];
export const roleOptions = ['ADMIN'];

// Ortak sütunlar
export const baseColumns = [
  { field: 'id', headerName: 'ID', editable: false, isIdKey: true ,flex:1},
  { field: 'email', headerName: 'Email',  editable: true ,flex:1},
  { field: 'name', headerName: 'Soyadı',  editable: true ,flex:1},
  { field: 'phoneNumber', headerName: 'Telefon Numarası', editable: true ,flex:1},
  { field: 'password', headerName: 'Parola',  editable: true ,flex:1},
  { field: 'role', headerName: 'Yetki', type: 'singleSelect', valueOptions: roleOptions, editable: true,flex:1 },  
];

// Form validasyonu için schema
export const baseValidationSchema = Yup.object().shape({
  email: Yup.string().required('Email is required'),
  name: Yup.string().required('Name is required'),
  phoneNumber: Yup.string().required('Phone Number of is required'),
  password: Yup.string().required('Password is required'),
  role: Yup.string().required('Role is required'),
 });

// State'den müşteri verilerini seçme
export const baseState = (state) => state.user.userItems;

// Belirli bir state'e göre filtreleme fonksiyonu (örneğin "Beklemede")
// Memoize edilmiş seçici
export const adminUsersState = createSelector(
  [baseState],
  (userItems) => userItems.filter(user => user.role === 'ADMIN')
);


export const baseDispatchers = {
  delete:deleteUser,
  update:updateUser,
  getAll: getAllUser,
};