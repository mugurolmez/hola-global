import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { mainNavibarStyles } from './styles';
import { mainNavbarItems } from './navibarItems';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';


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
      {value === index && (
        <Box sx={{ bgcolor:'black', p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
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

const Navibar = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [value, setValue] = React.useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const items = mainNavbarItems(t);

  return (
    <Box sx={mainNavibarStyles.pageBox}>
      
        <Tabs
          indicatorColor="primary"
          value={value}
          onChange={handleChange}
          sx={mainNavibarStyles.tabs}
        >
          {items.map((item) => (
            <Tab
              
              key={item.id}
              label={
                <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '100%',
                  height: '100%',
                }}
                >
             { item.label}
                  </Box>
              }
              
              {...a11yProps(item.id)}
              sx={{    
                
                ...mainNavibarStyles.tab,
                display: item.id === 0 ? { xs: 'none', sm: 'none',md:'none',lg:'block'} : 'block',
               // Anasayfa tabını xs ekranlarda gizle
              }}
              onClick={() => navigate(item.route)}
            />
          ))}
        </Tabs>
      
    </Box>
  );
};

export default Navibar;
