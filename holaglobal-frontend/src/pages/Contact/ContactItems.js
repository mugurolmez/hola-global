import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import HomeIcon from '@mui/icons-material/Home';
import EmailIcon from '@mui/icons-material/Email';

export const mainContactItems = (t) => {
    return [
        {
            id:0,
            title: t(`contact.phoneNumber.title`),
            content: t(`contact.phoneNumber.content`),
            icon: <PhoneAndroidIcon  sx={{fontSize: {xs: '60px', sm: '80px',md: '80px', lg: '80px', xl: '80px'} }} />,
            type:'phone'
        },
        {
            id:1,
            title: t(`contact.email.title`),
            content: t(`contact.email.content`),
            icon: <EmailIcon sx={{fontSize: {xs: '60px', sm: '80px',md: '80px', lg: '80px', xl: '80px'} }}/>, // Telefon ikonu
            type:'email'
        },
        {
            id:2,
            title: t(`contact.address.title`),
            content: t(`contact.address.content`),
            icon: <HomeIcon  sx={{fontSize: {xs: '80px', sm: '80px',md: '80px', lg: '80px', xl: '80px'} }}/>, // Telefon ikonu
            type:'address'
        },
    
    ]
}
  