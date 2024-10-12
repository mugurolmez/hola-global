import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import PendingCustomers from './PendingCustomers';
import ApprovedCustomers from './ApprovedCustomers';
import CancelledCustomers from './CancelledCustomers';
import AllCustomers from './AllCustomers';

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box >{children}</Box>}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function CustomerTabPanel() {
  const [value, setValue] = useState(0);


  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{minWidth:'500px' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab label="Beklemede" {...a11yProps(0)} />
          <Tab label="Onaylandı" {...a11yProps(1)} />
          <Tab label="İptal" {...a11yProps(2)} />
          <Tab label="Tüm Müşteriler" {...a11yProps(3)} />
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
        <PendingCustomers />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        <ApprovedCustomers />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
        <CancelledCustomers />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={3}>
        <AllCustomers />
      </CustomTabPanel>
    </Box>
  );
}
