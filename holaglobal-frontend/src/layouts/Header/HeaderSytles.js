export const mainHeaderStyles = {
   pageBox: {
      display: 'flex',
      position: 'relative',
      justifyContent: 'center',
      alignItems: '',
      m:2,
      flexDirection: { xs: 'column', sm: 'row' },
      minHeight:'10vh',
   },
   holaBox: {
      position: { xs: 'relative', sm: 'absolute' },
      left: '50%',
      transform:'translateX(-50%)',
      maxWidth: { xs: '100%', sm: '180px',md: '260px', lg: '350px', xl: '350px' },
      mb: { xs: 2, sm: 0 },
   },
   healthInsuranceBox: {
      position: { xs: 'relative', sm: 'absolute' },
      right: '0',
      display:'flex',
      alignItems:'center',
      justifyContent:'right',
      width: { xs: '100%', sm: '180px',md: '260px', lg: '350px', xl: '350px' },
    
   
     
   },
   languageSelectorBox: {
      position: { xs: 'relative', sm: 'absolute' }, 
      left: 0,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: { xs: '100%', sm: '140px',md: '250px', lg: '250px', xl: '250px' },
     
   },

}

