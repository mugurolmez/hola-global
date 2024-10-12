import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@mui/material';
import { mainAppStyles } from '../appStyles';
import { useTranslation } from 'react-i18next';


function HealthInsuranceButton() {
  const { t } = useTranslation();
  const navigate = useNavigate();
 

  const handleClick = () => {
    navigate('/foreing-health-insurance')
  }

  return (
      <Button onClick={handleClick}
        sx={mainAppStyles.healthInsuranceButton}
      >{t('mainForeingHealthInsuranceItems.insuranceTitle')}
      </Button> 
  );
}

export default HealthInsuranceButton;
