import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/DeleteOutlined';
import SaveIcon from '@mui/icons-material/Save';
import CancelIcon from '@mui/icons-material/Close';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import {
  GridRowModes,
  DataGrid,
  GridToolbarContainer,
  GridActionsCellItem,
  GridRowEditStopReasons,
} from '@mui/x-data-grid';
import { useDispatch, useSelector } from 'react-redux';
import dayjs from 'dayjs';

import { baseColumns,baseValidationSchema,baseDispatchers, baseState } from './CustomerItemsHelper';
import { showSnackbar } from '../../../store/actions/snackbarActions';
import AddCustomerModal from '../../../component/AddCustomerModal';

// EditToolbar bileşeni
function EditToolbar({ openModal }) {
  return (
    <GridToolbarContainer>
    <Button
      
      startIcon={<AddIcon />}
      onClick={openModal}
      size="small"
      sx={{ width: 'auto', padding: '4px 8px', fontSize: '2 rem' }} // Buton genişliğini 'auto' yaparak tam genişliği iptal et
    >
      Yeni Kayıt
    </Button>
  </GridToolbarContainer>
  
  );
}

export default function AllCustomers() {
  const [rows, setRows] = React.useState([]);
  const [rowModesModel, setRowModesModel] = React.useState({});
  const [open, setOpen] = React.useState(false);
  const [snackbar, setSnackbar] = React.useState({ open: false, message: '', severity: 'error' });
  
  const dispatch = useDispatch();
  const items = useSelector(baseState);

  const showSnackbarMessage = (message, severity = 'error') => {
    dispatch(showSnackbar(message, severity));
  };

 
  React.useEffect(() => {
    // baseDispatchers.getAll bir işlev olarak tanımlanmalı ve çağrılmalı
    if (baseDispatchers.getAll) {
      dispatch(baseDispatchers.getAll());
    } else {
      console.error("baseDispatchers.getAll işlevi bulunamadı.");
    }
  }, [dispatch]);

  // Satır düzenleme durumu
  const handleRowEditStop = (params, event) => {
    if (params.reason === GridRowEditStopReasons.rowFocusOut) {
      event.defaultMuiPrevented = true;
    }
  };

  // Satırı düzenleme
  const handleEditClick = (id) => () => {
    setRowModesModel({ ...rowModesModel, [id]: { mode: GridRowModes.Edit } });
  };

  // Düzenlemeyi kaydetme
  const handleSaveClick = (id) => () => {
    setRowModesModel({ ...rowModesModel, [id]: { mode: GridRowModes.View } });
  };

  // Satırı silme
  const handleDeleteClick = (id) => async () => {
    if (!id) {
      console.error("Geçersiz ID:", id);
      return;
    }

    try {
      const response = await dispatch(baseDispatchers.delete(id));

      if (response.success) {
        setRows(rows.filter((row) => row.id !== id));
      } else {
        showSnackbar('Silme başarısız', 'error');
      }
    } catch (error) {
      console.error("Silme hatası:", error);
      showSnackbar('Silme işlemi sırasında bir hata oluştu.', 'error');
    }
  };

  // Düzenlemeyi iptal etme
  const handleCancelClick = (id) => () => {
    setRowModesModel({
      ...rowModesModel,
      [id]: { mode: GridRowModes.View, ignoreModifications: true },
    });

    const editedRow = rows.find((row) => row.id === id);
    if (editedRow && editedRow.isNew) {
      setRows(rows.filter((row) => row.id !== id));
    }
    
  };

  // Satır güncellemelerini işleme
  const processRowUpdate = async (newRow) => {
    try {
      await baseValidationSchema?.validate(newRow, { abortEarly: false });

      const result = await dispatch(baseDispatchers.update(newRow));
      console.log("Güncelleme sonucu:", JSON.stringify(result));

      if (result.response.success) {
        showSnackbarMessage('Güncelleme başarılı', 'success');
        await dispatch(baseDispatchers.getAll()); // Veriyi yeniden yükle
        return newRow;
      } else {
        showSnackbarMessage('Güncelleme başarısız', 'error');
        throw new Error("Güncelleme başarısız");
      }
    } catch (error) {
      if (error.name === 'ValidationError') {
        showSnackbarMessage(error.errors.join(', '), 'error');
      } else {
        showSnackbarMessage('Bir hata oluştu. Lütfen tekrar deneyin.', 'error');
      }
     // return newRow; // Hatalı durumda bile güncellenmiş satırı döndürmek
    }
  };
  const handleError = (error) => {
    console.error("DataGrid işlemi hatası:", error);
   // showSnackbar('DataGrid işlemi sırasında bir hata oluştu.', 'error');
  };
  
  // Satır düzenleme modunu değiştirme
  const handleRowModesModelChange = (newRowModesModel) => {
    setRowModesModel(newRowModesModel);
  };

  // Modal açma ve kapama işlevleri
  const handleOpenModal = () => setOpen(true);
  const handleCloseModal = () => setOpen(false);
  
  const columns = [
    ...baseColumns,
    {
      field: 'actions',
      type: 'actions',
      headerName: 'Actions',
      cellClassName: 'actions',
      getActions: ({ id }) => {
        const isInEditMode = rowModesModel[id]?.mode === GridRowModes.Edit;

        if (isInEditMode) {
          return [
            <GridActionsCellItem
              icon={<SaveIcon />}
              label="Save"
              sx={{ color: 'primary.main' }}
              onClick={handleSaveClick(id)}
            />,
            <GridActionsCellItem
              icon={<CancelIcon />}
              label="Cancel"
              className="textPrimary"
              onClick={handleCancelClick(id)}
              color="inherit"
            />,
          ];
        }

        return [
          <GridActionsCellItem
            icon={<EditIcon />}
            label="Edit"
            className="textPrimary"
            onClick={handleEditClick(id)}
            color="inherit"
          />,
          <GridActionsCellItem
            icon={<DeleteIcon />}
            label="Delete"
            onClick={handleDeleteClick(id)}
            color="inherit"
          />,
        ];
      },
    },
  ];

  return (
    <Box
      sx={{
        height: 500,
        '& .actions': {
          color: 'text.secondary',
        },
        '& .textPrimary': {
          color: 'text.primary',
        },
      }}
    >
      <DataGrid
        rows={items.map(item => ({
          ...item,
          dateOfBirth: item.dateOfBirth ? dayjs(item.dateOfBirth).toDate() : null,
          applicationDate: item.applicationDate ? dayjs(item.applicationDate).toDate() : null,
        }))} // Convert dates to Date objects
        columns={columns}
        editMode="row"
        rowModesModel={rowModesModel}
        onProcessRowUpdateError={handleError}
        onRowModesModelChange={handleRowModesModelChange}
        onRowEditStop={handleRowEditStop}
        processRowUpdate={processRowUpdate}
        getRowId={(row) => row.id || `${Date.now()}-${Math.random()}`} // Eğer row.id yoksa rastgele bir ID üret
        slots={{
          toolbar: EditToolbar,
        }}
        slotProps={{
          toolbar: { openModal: handleOpenModal }, // Modal'ı açmak için işlevi geçin
        }}
      />
      <AddCustomerModal open={open} onClose={handleCloseModal} />
      <Snackbar
        open={snackbar.open}
        autoHideDuration={6000}
        onClose={() => setSnackbar({ ...snackbar, open: false })}
      >
        <Alert onClose={() => setSnackbar({ ...snackbar, open: false })} severity={snackbar.severity}>
          {snackbar.message}
        </Alert>
      </Snackbar>
    </Box>
  );
}
