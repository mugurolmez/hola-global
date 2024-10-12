import React from 'react';
import { Box, Grid, Typography } from '@mui/material';
import { mainAppStyles } from '../../appStyles';
import { useTranslation } from 'react-i18next';
import { mainContactItems } from './ContactItems';

const handleMapClick = () => {
  const mapLink = 'https://www.google.com/maps/dir/?api=1&destination=Pirebi+Mahallesi+S%C3%B6ylemez+Sokak+12/D+Meram/KONYA';
  window.open(mapLink, '_blank');
};

const Contact = () => {
  const { t } = useTranslation();
  const items = mainContactItems(t);

  return (
    <Grid container spacing={2}>
      <Grid item lg={6} xs={12}>
        <Grid container spacing={2} direction="column">
          {items.map((item) => (
            <Grid key={item.id} item xs={12} sm={6}>
              <Box sx={mainAppStyles.contactBox}>
                <Box>
                  <a
                    href={item.type === 'phone' ? `tel:${item.content}` : `mailto:${item.content}`}
                    style={{ textDecoration: 'none', color: 'inherit' }}
                  >
                    {item.icon}
                  </a>
                </Box>
                <Box display={'flex'} flexDirection={'column'}>
                  <Typography sx={{ variant: 'h5', fontWeight: 'bold' }}>
                    {item.title}
                  </Typography>
                  <Typography sx={{ variant: 'body1' }}>
                    {item.content}
                  </Typography>
                </Box>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Grid>
      <Grid item lg={6} xs={12}>
        <Box sx={mainAppStyles.contactBox2}>
          <Typography sx={{ variant: 'h5', fontWeight: 'bold' }}>Yol Tarifi Alın</Typography>
          <Box sx={{ display: 'flex', cursor: 'pointer', height: {xs:'400px' ,lg:'100%'}, width: '100%' }} onClick={handleMapClick}>
            <iframe 
              width="100%" 
              height="100%" 
              title="Hola Global!"
              src="https://maps.google.com/maps?width=100%25&amp;height=100%25&amp;hl=en&amp;q=Pirebi%20Mahallesi%20S%C3%B6ylemez%20Sokak%2012/D%20Meram/KONYA&amp;t=p&amp;z=15&amp;ie=UTF8&amp;iwloc=B&amp;output=embed&markers=color:red%7Clabel:H%7C37.871853,%2032.484355">
            </iframe>
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
};

export default Contact;
