export const mainFaqItems = (t) => {
  return Array.from({ length: 60 }, (_, index) => {
      const id = index + 1;
      return {
          id,
          title: t(`faq.residence.${id}.title`),
          content: t(`faq.residence.${id}.content`),
      };
  });
};
