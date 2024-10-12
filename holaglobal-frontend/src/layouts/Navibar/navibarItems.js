export const mainNavbarItems = (t) => {
    return [
      {
        id: 0,
        label: t('mainNavbarItems.homeLabel'),
        text: t('mainNavbarItems.homeText'),
        route: 'home',
      },
      {
        id: 1,
        label: t('mainNavbarItems.residencePermitsLabel'),
        text: t('mainNavbarItems.residencePermitsText'),
        route: 'residence-permits'
      },
      {
        id: 2,
        label: t('mainNavbarItems.healthInsuranceLabel'),
        text: t('mainNavbarItems.healthInsuranceText'),
        route: 'foreing-health-insurance'
      },
      {
        id: 3,
        label: t('mainNavbarItems.contactLabel'),
        text: t('mainNavbarItems.contactText'),
        route: '/contact'
      }
    ];
  };
  