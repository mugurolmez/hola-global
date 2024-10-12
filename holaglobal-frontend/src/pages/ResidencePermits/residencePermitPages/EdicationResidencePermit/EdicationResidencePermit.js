// EdicationResidencePermitPage1.jsx

import React, { useEffect, useState } from 'react';
import { Box, Typography } from '@mui/material';
import { mainAppStyles } from '../../../../appStyles';
import CustomerForm from '../../../../forms/CustomerForm/CustomerForm';
import { useMainCustomerFormItems } from '../../../../forms/CustomerForm/CustomerFormItem';
import { mainEdicationResidencePermitItems } from './EdicationResidencePermitItems';
import { useTranslation } from 'react-i18next';

const EdicationResidencePermitPage1 = () => {
  const { t } = useTranslation();
  const items = mainEdicationResidencePermitItems(t);
  const mainCustomerFormItems = useMainCustomerFormItems();

  const [selectedOption, setSelectedOption] = useState(null);

  useEffect(() => {
    // Örnek 1 için seçili seçeneği belirliyoruz
    const selectedOptionForPage1 = mainCustomerFormItems.find(item => item.id === 4)?.options[1]; // Örneğin, 2. seçeneği seçiyoruz
    setSelectedOption(selectedOptionForPage1);
  }, [mainCustomerFormItems]);

  return (
    <Box sx={mainAppStyles.pageBox}>
      <Box sx={mainAppStyles.pageFormBox} width={{ xs: '100%', md: '40%' }} padding={2}>
        <CustomerForm mainCustomerFormItems={mainCustomerFormItems} selectedOption={selectedOption} />
      </Box>

      <Box sx={mainAppStyles.pageTextBox}>
        {items.map((item) => (
          <Typography key={item.id} variant={item.variant}>
            {item.text}
          </Typography>
        ))}
      </Box>
    </Box>
  );
};

export default EdicationResidencePermitPage1;
