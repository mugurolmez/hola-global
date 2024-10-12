import React from 'react'
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Box, Typography } from '@mui/material';
import { mainFaqItems } from './FaqItems';
import { useTranslation } from 'react-i18next';

const Faq = () => {
    const { t } = useTranslation();
    const items = mainFaqItems(t);
    return (
        <Box  m={3}>
                <Typography textAlign={'center'} variant='h3'>
                   {t('faq.mainTitle')}
                </Typography>
            {items.map((item) => (

                <Accordion key={item.id} sx={
                   { border: '1px solid white', backgroundColor: '#212121', color: '#e94e1b', maxWidth: 'xl',m:'1'}}
                   >


                    <AccordionSummary sx={{m:1}} expandIcon={<ExpandMoreIcon sx={{color:'red'}} />}   >
                        <Typography sx={{  fontWeight: 'bold', color:'#e94e1b' }}>

                            {item.title}
                        </Typography>
                        
                    </AccordionSummary>

                    <AccordionDetails>
                        <Typography sx={{  fontWeight: 'bold', color:'white' }}>
                              {item.content}
                        </Typography>
                      
                    </AccordionDetails>

                </Accordion>

            ))

            }






        </Box>
    )
}

export default Faq