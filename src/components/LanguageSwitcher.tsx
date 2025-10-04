import { useTranslation } from 'react-i18next';
import { useEffect, useState } from 'react';

const LanguageSwitcher = () => {
  const { i18n, t } = useTranslation();
  const [detectedLanguage, setDetectedLanguage] = useState<string>('');
  const [isAutoSelected, setIsAutoSelected] = useState<boolean>(false);

  useEffect(() => {
    // Get the original browser language before any conversion
    const browserLang = navigator.language || navigator.languages[0];
    setDetectedLanguage(browserLang);
    
    // Check if the current language was auto-selected (not from localStorage)
    const storedLang = localStorage.getItem('i18nextLng');
    setIsAutoSelected(!storedLang);
  }, []);

  const changeLanguage = (language: string) => {
    i18n.changeLanguage(language);
    setIsAutoSelected(false); // User manually selected
  };

  const currentLanguage = i18n.language;

  return (
    <div style={{ marginBottom: '20px' }}>
      <label htmlFor="language-select">{t('language')}: </label>
      <select 
        id="language-select"
        value={currentLanguage} 
        onChange={(e) => changeLanguage(e.target.value)}
        style={{ marginLeft: '10px', padding: '5px' }}
      >
        <option value="en">{t('language_english')}</option>
        <option value="pt">{t('language_portuguese')}</option>
      </select>
      
      {detectedLanguage && (
        <div style={{ fontSize: '12px', color: '#666', marginTop: '5px' }}>
          {t('browser_detected')}: {detectedLanguage}
          {isAutoSelected && (
            <div style={{ fontStyle: 'italic' }}>
              {t('auto_selected')}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default LanguageSwitcher;