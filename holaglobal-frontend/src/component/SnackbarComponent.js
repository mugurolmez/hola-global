// component/SnackbarComponent.js
import React from 'react';
import Snackbar from '@mui/material/Snackbar';
import { useSelector, useDispatch } from 'react-redux';
import { hideSnackbar } from '../store/actions/snackbarActions';
import SnackbarContent from '@mui/material/SnackbarContent';
import { green, red, orange, blue } from '@mui/material/colors'; // Başarı, hata, uyarı ve bilgi renklerini ekliyoruz

const SnackbarComponent = () => {
  const dispatch = useDispatch();
  const { open, message, severity } = useSelector(state => state.snackbar);

  const handleClose = () => {
    dispatch(hideSnackbar());
  };

  // Snackbar'ın arka plan rengini severity'ye göre ayarlayın
  let backgroundColor;
  switch (severity) {
    case 'success':
      backgroundColor = green[600];
      break;
    case 'error':
      backgroundColor = red[600];
      break;
    case 'warning':
      backgroundColor = orange[600];
      break;
    case 'info':
      backgroundColor = blue[600];
      break;
    default:
      backgroundColor = blue[600]; // Varsayılan olarak bilgi rengi
  }

  return (
    <Snackbar
      open={open}
      autoHideDuration={4000}
      onClose={handleClose}
      anchorOrigin={{ vertical: 'top', horizontal: 'center' }} // Üst ve ortada göster
    >
      <SnackbarContent
        style={{ backgroundColor }} // Rengi severity'ye göre ayarlayın
        message={message}
      />
    </Snackbar>
  );
};

export default SnackbarComponent;
