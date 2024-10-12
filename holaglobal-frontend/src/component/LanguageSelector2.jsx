import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";



const languages = [
  { code: "en", lang: "English", flag: "🇺🇸" },
  { code: "tr", lang: "Türkçe", flag: "🇹🇷" },
  { code: "ru", lang: "Russian", flag: "🇷🇺" }
];

const LanguageSelector2 = () => {
  const { t } = useTranslation();
  const { i18n } = useTranslation();

  useEffect(() => {
    
    // Eğer dil daha önce ayarlanmamışsa varsayılan dili Türkçe yap
    if (!i18n.language) {
      i18n.changeLanguage("tr");
    }
    document.body.dir = i18n.dir();
  }, [i18n]);

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };
  const currentLanguage = languages.find(lang => lang.code === i18n.language) ? i18n.language : "tr";


  return (
    <FormControl fullWidth variant="outlined">
      <InputLabel sx={{ fontWeight: 'bold', color: '#e94e1b' }} id="language-selector-label">{t('languageSelector.label')}</InputLabel>
      <Select

        labelId="language-selector-label"
        id="language-selector"
        value={currentLanguage} 
        onChange={(e) => changeLanguage(e.target.value)}
        label="Dil Seçin"
      >
        {languages.map((lng) => (
          <MenuItem key={lng.code} value={lng.code}>
            {lng.flag} {lng.lang}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default LanguageSelector2;
