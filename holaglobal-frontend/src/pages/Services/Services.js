import React from 'react'
import { Box, Typography } from '@mui/material';
import { mainServicesItems } from './ServicesItems';
import { useTranslation } from 'react-i18next';
import { mainAppStyles } from '../../appStyles';
const Services = () => {
    const { t } = useTranslation();
    const items = mainServicesItems(t);
    return (
        <Box sx={mainAppStyles.pageTextBox}>
            <Typography textAlign={'center'} variant='h3'>
                {t('services.mainTitle')}
            </Typography>
            {items.map((item) => (
                <Box>
                    <Typography variant='h5'>
                        {item.title}

                    </Typography>
                    <Typography>
                        {item.content}
                    </Typography>
                </Box>
            ))

            }
        </Box>
    )
}

export default Services