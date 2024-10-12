import * as React from 'react';
import { styled } from '@mui/system';
import { Tabs } from '@mui/base/Tabs';
import { TabsList as BaseTabsList } from '@mui/base/TabsList';
import { TabPanel as BaseTabPanel } from '@mui/base/TabPanel';
import { buttonClasses } from '@mui/base/Button';
import { Tab as BaseTab, tabClasses } from '@mui/base/Tab';
import { Box, Grid } from '@mui/material';
import { mainTabItems } from './ResidencePermitItems';
import { orange } from '@mui/material/colors';
import FamilyResidencePermit from './residencePermitPages/FamilyResidencePermit/FamilyResidencePermit';
import TouristResidencePermit from './residencePermitPages/TouristResidencePermit/TouristResidencePermit';
import HumanitarianResidencePermit from './residencePermitPages/HumanitarianResidencePermit/HumanitarianResidencePermit';
import ShortTermResidencePermit from './residencePermitPages/ShortTermResidencePermit/ShortTermResidencePermit';
import LongTermResidencePermit from './residencePermitPages/LongTermResidencePermit/LongTermResidencePermit';
import EdicationResidencePermit from './residencePermitPages/EdicationResidencePermit/EdicationResidencePermit';
import { useTranslation } from 'react-i18next';

const pages = {
  FamilyResidencePermit,
  EdicationResidencePermit,
  TouristResidencePermit,
  HumanitarianResidencePermit,
  ShortTermResidencePermit,
  LongTermResidencePermit
};

const Tab = styled(BaseTab)`
  font-family: 'IBM Plex Sans', sans-serif;
  color: white;
  cursor: pointer;
  font-size: 0.875rem;
  font-weight: bold;
  background-color: transparent;
  width: 100%;
  line-height: 1.5;
  padding: 8px 12px;
  margin: 6px;
  border: none;
  border-radius: 8px;
  display: flex;
  justify-content: center;

  &:hover {
    background-color: ${orange[400]};
  }

  &:focus {
    color: #fff;
    outline: 3px solid ${orange[200]};
  }

  &.${tabClasses.selected} {
    background-color: white;
    color: black;
  }

  &.${buttonClasses.disabled} {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

const TabPanel = styled(BaseTabPanel)`
  width: 100%;
  font-family: 'IBM Plex Sans', sans-serif;
  font-size: 0.875rem;
`;

const TabsList = styled(BaseTabsList)(
  ({ theme }) => `
  min-width: 100%;
  background-color: #e94e1b;
  border-radius: 12px;
  margin-bottom: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0px 4px 6px ${theme.palette.mode === 'dark' ? 'rgba(0,0,0, 0.4)' : 'rgba(0,0,0, 0.2)'
    };

  @media (max-width: 600px) {
    flex-wrap: wrap;
  }
  `,
);

const ResidencePermits = () => {
  const { t } = useTranslation();
  const items = mainTabItems(t);
  return (
    <Box width={"100%"}>
      <Tabs defaultValue={0}>
        <TabsList>
          {items.map((item) => (
            <Tab key={item.id} value={item.id}>
              {item.text}
            </Tab>
          ))}
        </TabsList>
        {items.map((item) => {
          const PageComponent = pages[item.page];
          return (
            <Grid key={item.id}>
              <TabPanel key={item.id} value={item.id}>
                {PageComponent && <PageComponent />}
              </TabPanel>
            </Grid>
          );
        })}
      </Tabs>
    </Box>
  );
};

export default ResidencePermits;
