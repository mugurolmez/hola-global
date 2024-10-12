import React, { useEffect } from 'react';
import { CssBaseline, ThemeProvider, Grid } from '@mui/material';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { Routes, Route, useLocation } from 'react-router-dom';
import { theme } from './component/Theme';
import { tr } from 'date-fns/locale';
import Navibar from './layouts/Navibar/Navibar';
import Home from './pages/Home/Home';
import ResidencePermits from './pages/ResidencePermits/ResidencePermits';
import Footer from './layouts/Footer/Footer';
import Header from './layouts/Header/Header';
import ForeingHealthInsurance from './pages/ForeignHealthInsurance/ForeingHealthInsurance';
import WhatsappButton from './component/WhatsappButton';
import Contact from './pages/Contact/Contact';
import PrivacyPolicy from './pages/PrivacyPolicy/PrivacyPolicy';
import TermsOfUse from './pages/TermsOfUse/TermsOfUse';
import Faq from './pages/Faq/Faq';
import Services from './pages/Services/Services';
import Login from './pages/Login/Login';
import backgroundImage from './images/back5.jpeg';
import Start from './pages/Start/Start';
import { AdminRoute } from './Services/guard';
import SnackbarComponent from './component/SnackbarComponent';
import { useDispatch } from 'react-redux';
import { setLocation } from './store/actions/locationActions';
import Dashboard from './layouts/Dashboard/Dashboard';

function App() {
  const dispatch = useDispatch();
  const location = useLocation();

  useEffect(() => {
    dispatch(setLocation(location));
  }, [location, dispatch]);

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs} locale={tr}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Grid
          sx={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100vw',
            height: '100vh',
            display: 'flex',
            backgroundColor: 'black',
            backgroundImage: `url(${backgroundImage})`,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            opacity: 1,
            zIndex: -1,
          }}
        />
        
        {/* Ana sayfalar için Routes */}
        <Routes>
          <Route
            path="/*"
            element={
              <Grid
                container
                direction="column"
                justifyContent="center"
                alignItems="center"
                sx={{
                  maxWidth: { sm: '600px', md: '900px', lg: '1200px', xl: '1536px' },
                  mx: 'auto',
                  width: '100%',
                  flexGrow: 1,
                  mt: 1,
                  minHeight: '100vh',
                  display: 'flex', // Ekleme
                  justifyContent: 'center', // Ekleme: Ortalamak için
                  alignItems: 'center', // Ekleme: Ortalamak için

                }}
              >
                <Grid
                  container
                  direction="column"
                  justifyContent="center"
                  alignItems="center"
                  sx={{
                    flexGrow: 1,
                    width: '100%',
                    
                    mx:'auto'
                  }}
                >
                  <Grid item sx={{ width: '100%', mt: 1 }}>
                    <Header />
                  </Grid>
                  <Grid item sx={{ width: '100%', mt: 1 }}>
                    <Navibar />
                  </Grid>
                  <Grid
                    item
                    container
                    justifyContent="center"
                    alignItems="center"
                    sx={{
                      flexGrow: 1,
                      width: '100%',
                      mt: 1,
                    }}
                  >
                    <Routes>
                      <Route path="/" element={<Start />} />
                      <Route path="/home" element={<Home />} />
                      <Route path="/login" element={<Login />} />
                      <Route path="/contact" element={<Contact />} />
                      <Route path="/privacy" element={<PrivacyPolicy />} />
                      <Route path="/services" element={<Services />} />
                      <Route path="/terms" element={<TermsOfUse />} />
                      <Route path="/faq" element={<Faq />} />
                      <Route path="/foreing-health-insurance" element={<ForeingHealthInsurance />} />
                      <Route path="/residence-permits/*" element={<ResidencePermits />} />
                    </Routes>
                  </Grid>
                  <Grid item sx={{ width: '100%' }}>
                    <Footer />
                  </Grid>
                </Grid>
                <WhatsappButton />
              </Grid>
            }
          />
          
          {/* Dashboard için ayrı Route */}
          <Route path="/dashboard/*" element={<AdminRoute element={<Dashboard />} />} />
        </Routes>

        <SnackbarComponent />
      </ThemeProvider>
    </LocalizationProvider>
  );
}

export default App;
