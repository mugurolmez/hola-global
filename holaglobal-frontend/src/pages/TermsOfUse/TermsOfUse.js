import React from 'react'
import { useTranslation } from 'react-i18next';
import { Box, Typography } from '@mui/material';
import { mainAppStyles } from '../../appStyles';
import { mainTermsOfUseItems } from './TermsOfUseItems';

const TermsOfUse = () => {
    const { t } = useTranslation();
    const items = mainTermsOfUseItems(t);
  return (
    <Box sx={mainAppStyles.pageTextBox}>
    {items.map((item) => (
      <Typography key={item.id} variant={item.variant}>
        {item.text}
      </Typography>
    ))}
  </Box>
  )
}

export default TermsOfUse