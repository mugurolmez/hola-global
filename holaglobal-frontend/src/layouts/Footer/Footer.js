import React from 'react';
import { Box, Container, Grid, Typography, Link } from '@mui/material';
import { mainFooterItems } from './FooterItems';
import { useTranslation } from 'react-i18next';

const Footer = () => {
  const { t } = useTranslation();
  const items = mainFooterItems(t);
  
  return (
    <Box component="footer"  m={1} py={4} sx={{backgroundColor:'#212121'}} >
      <Container>
        <Grid container spacing={4}>
          {Object.values(items).map((section, sectionIndex) => (
            <Grid key={sectionIndex} item xs={12} sm={6} md={3}>
              <Typography variant={section[0].variant}>{section[0].text}</Typography>
              {section.slice(1).map((item, itemIndex) => (
                <React.Fragment key={itemIndex}>
                  {item.href ? (
                    <Typography variant="body2">
                      <Link href={item.href} color="inherit">{item.text}</Link>
                    </Typography>
                  ) : (
                    <Typography variant="body2">
                      {item.text}
                    </Typography>
                  )}
                </React.Fragment>
              ))}
            </Grid>
          ))}
        </Grid>
        <Box textAlign="center" pt={4}>
          <Typography variant="body2">&copy; {new Date().getFullYear()} Hola! {t('footer.allRightsReserved')}</Typography>
          <Link href="/privacy" color="inherit">{t('footer.privacyPolicy')}</Link> |
          <Link href="/terms" color="inherit">{t('footer.termsOfUse')}</Link>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
