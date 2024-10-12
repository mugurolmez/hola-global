import React from 'react'

import { Box, ImageListItem } from '@mui/material'
import LanguageSelector2 from '../../component/LanguageSelector2'
import HealthInsuranceButton from '../../component/HealthInsuranceButton'
import hola from '../../images/HOLA1.png'
import { mainHeaderStyles } from './HeaderSytles';
import { Link } from 'react-router-dom';

const Header = () => {


  return (
    <Box sx={mainHeaderStyles.pageBox} >

      <Box sx={mainHeaderStyles.languageSelectorBox}>
        <LanguageSelector2 />
      </Box>

      <Box sx={mainHeaderStyles.holaBox}>
        <Link to="/home">
          <ImageListItem >
            <img src={hola} alt="hola" style={{ cursor: 'pointer' }} />
          </ImageListItem>
        </Link>
      </Box>

      <Box sx={mainHeaderStyles.healthInsuranceBox}>
        <HealthInsuranceButton />
      </Box>

    </Box>

  );
}

export default Header