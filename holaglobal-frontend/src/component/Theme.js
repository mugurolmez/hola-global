import { createTheme } from "@mui/material/styles";


export const theme = createTheme({
    palette: {
        primary: {
            light: '#ffb74d',
            main: '#e94e1b',
            dark: '#f57c00',
        },
        secondary: {
            main: '#673ab7',
        },
    },


    components: {
      MuiDataGrid: {
        styleOverrides: {
          root: {
            border: 'none',
            
            // DataGrid border'ı kaldır
            '& .MuiDataGrid-cell': {
              color: 'black', // Hücre metin rengini değiştir
              
            },
            '& .MuiDataGrid-cell--editing': {
            backgroundColor: '#000', // Düzenleme modundaki hücrelerin arka plan rengini siyah yap
            color: '#fff', // Düzenleme modundaki hücrelerin metin rengini beyaz yap
          },
            '& .MuiDataGrid-columnHeaders': {
              backgroundColor: '#f5f5f5', // Kolon başlıklarının arka plan rengini değiştir
              color: '#000', // Kolon başlık metin rengini değiştir
              fontSize: '16px', // Kolon başlıklarının font büyüklüğünü değiştir
            },
            '& .MuiDataGrid-footerContainer': {
              backgroundColor: '#f5f5f5', // Footer arka plan rengini değiştir
            },
            '.customInput .MuiInputBase-input': {
              color: 'black', // Metin rengini siyah yapar
              backgroundColor: 'white', // Arka plan rengini beyaz yapar
            },
          },
        },
      },
    

        MuiMenuItem: {
            styleOverrides: {
              root: {
                backgroundColor: 'white', // Arka plan rengi
                color: 'black', // Metin rengi
                '&:hover': {
                  backgroundColor: '#f0f0f0', // Hover durumu için arka plan rengi
                },
              },
            },
          },
        
        // Diğer tema ayarları
            MuiOutlinedInput: {
                styleOverrides: {
                  root: {
                    backgroundColor: 'white', // Input arka plan rengi
                  },
                },
              },
              MuiSvgIcon: {
                styleOverrides: {
                  root: {
                    color: '#e94e1b', // İkon rengi
                  },
                },
              },
          
              MuiInputBase: {
                styleOverrides: {
                  input: {
                    color: 'black', // Metin rengini siyah yapar
                    backgroundColor: 'white', // Arka plan rengini beyaz yapar
                  },
                },
              },
            
            

        typography: {
            // Tipografi ayarları
        },

        MuiInputLabel: {
            styleOverrides: {
                root: {
                    width: '100%',
                    color: 'black', // Label rengi
                 
                },
            },
        },


        MuiSelect: {
            styleOverrides: {
                select: {
                    backgroundColor: 'white',
                    color: 'black',
                    '&:focus': {
                        backgroundColor: 'white',
                        color: 'black',
                    },
                    '&:hover': {
                        backgroundColor: 'white',
                        color: 'black',
                    },
                    '& ul': {
                        backgroundColor: 'white',
                        color: 'black',
                    },
                    '.MuiMenu-paper': {
                        backgroundColor: 'white',
                        color: 'black',
                    },
                },
                icon: {
                    color: 'black',
                },
            },
        },


        MuiTextField: {
            styleOverrides: {
              root: {
                // Global TextField root ayarları
                width: '100%', // Tüm inputlar %100 genişlikte olsun
                marginBottom: '15px', // Inputlar arasında boşluk
              },
            },
            defaultProps: {
              // Global InputProps ayarları
              InputProps: {
                style: {
                  backgroundColor: '#f0f0f0', // Global arka plan rengi
                  color: '#333', // Yazı rengi
                },
              },
              // Label için global ayarlar
              InputLabelProps: {
                style: {
                  color: '#555', // Label rengi
                },
              },
            },
          },
        


        MuiButton: {
            styleOverrides: {
                root: {
                    width: '100%',
                    backgroundColor: 'black',
                    color: 'white',
                    height: '60px',  // Varsayılan yükseklik

                    // Responsive yükseklik ayarı
                    '@media (max-width:600px)': { // Telefon boyutları için
                        height: '40px',
                    },
                    '@media (min-width:600px) and (max-width:960px)': { // Tablet boyutları için
                        height: '45px',
                    },
                    '@media (min-width:960px)': { // Daha büyük ekranlar için
                        height: '55px',
                    },
                    '&:hover': {
                        backgroundColor: 'white',
                        color: 'black',
                    },
                    '&:disabled': {
                        backgroundColor: 'red',
                        color: 'white',
                    },
                },
                contained: {
                    fontWeight: 'bold',
                    textAlign: 'center',
                    width: '100%',
                },
            },
        },
    },


    typography: {
        h6: {
            color: 'white',
        },
        h5: {
            color: 'white',
            marginBottom: '10px',
        },
        h4: {
            color: 'white',
            marginBottom: '10px',
        },
        h3: {
            color: 'white',
            marginBottom: '10px',
        },
        body1: {
            fontSize: '20px',
            color: '#e94e1b',
            marginBottom: '10px',
        },
        body2: {
            fontSize: '16px',
            color: 'white',
            marginBottom: '10px',
        },
    },
});
