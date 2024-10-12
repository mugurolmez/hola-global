export const mainServicesItems = (t) => {
    return Array.from({ length: 5 }, (_, index) => {
        const id = index + 1;
        return {
            id,
            title: t(`services.${id}.title`),
            content: t(`services.${id}.content`),
        };
    });
  };
  