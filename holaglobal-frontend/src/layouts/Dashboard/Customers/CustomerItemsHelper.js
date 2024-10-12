import * as Yup from 'yup';
import { addCustomer, deleteCustomer, getAllCustomer, updateCustomer } from '../../../store/thunks/customerThunk';
// Durum seçenekleri ve izin türü sabitleri
import { createSelector } from 'reselect';
export const stateOptions = ['Beklemede', 'Onaylandı', 'İptal'];
export const permitOptions = ['Aile İkamet İzni', 'Öğrenci İkamet İzni', 'İnsani İkamet İzni', 'Kısa Dönem İkamet', 'Uzun Dönem İkamet'];

// Ortak sütunlar
export const baseColumns = [
  { field: 'id', headerName: 'ID', editable: false,type:'text', isIdKey: true , minWidth: 50},
  { field: 'name',headerName: 'Adı', type:'text' ,editable: true , minWidth: 100},
  { field: 'lastname', headerName: 'Soyadı',  editable: true, minWidth: 100},
  { field: 'dateOfBirth', headerName: 'Doğum Tarihi', type: 'date', editable: true , minWidth: 120},
  { field: 'passportNumber', headerName: 'Passport No',  editable: true , minWidth: 150},
  { field: 'typeOfResidencePermit', headerName: 'Oturma İzni Türü', type: 'singleSelect', valueOptions: permitOptions, editable: true, minWidth: 200},
  { field: 'phoneNumber', headerName: 'GSM', editable: true , minWidth: 200},
  { field: 'nationality', headerName: 'Nationality',  editable: true , minWidth: 200},
  { field: 'applicationDate', headerName: 'Başvuru Tarihi',  type: 'date', editable: false , minWidth: 200},
  { field: 'healthInsuranceNumber', headerName: 'Poliçe No', editable: true , minWidth: 200},
  { field: 'state', headerName: 'Durum',  editable: true, type: 'singleSelect', valueOptions: stateOptions , minWidth: 200},
  
];

// Form validasyonu için schema
export const baseValidationSchema = Yup.object().shape({
  name: Yup.string().required('Name is required'),
  lastname: Yup.string().required('Lastname is required'),
  dateOfBirth: Yup.date().required('Date of Birth is required').typeError('Invalid date format'),
  passportNumber: Yup.string().required('Passport Number is required'),
  typeOfResidencePermit: Yup.string().required('Type of Residence Permit is required'),
  phoneNumber: Yup.string()
  .required('Phone Number is required')
  .matches(/^05\d{9}$/, 'Telefon numarası 05xx şeklinde başlamalıdır'),

  nationality: Yup.string().required('Nationality is required'),
  healthInsuranceNumber: Yup.string().nullable(),
  state: Yup.string().required('State is required'),
});

// State'den müşteri verilerini seçme
export const baseState = (state) => state.customer.customerItems;

// Belirli bir state'e göre filtreleme fonksiyonu (örneğin "Beklemede")
// Memoize edilmiş seçici
export const pendingCustomersState = createSelector(
  [baseState],
  (customerItems) => customerItems.filter(customer => customer.state === 'Beklemede')
);

// Diğer durumlar için benzer memoize edilmiş seçiciler
export const approvedCustomersState = createSelector(
  [baseState],
  (customerItems) => customerItems.filter(customer => customer.state === 'Onaylandı')
);

export const cancelledCustomersState = createSelector(
  [baseState],
  (customerItems) => customerItems.filter(customer => customer.state === 'İptal')
);
export const baseDispatchers = {
  add: addCustomer,
  update: updateCustomer,
  delete: deleteCustomer,
  getAll: getAllCustomer,
};