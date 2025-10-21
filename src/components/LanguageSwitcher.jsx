import { useTranslation } from 'react-i18next';
import { FaGlobe } from 'react-icons/fa';

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const toggleLanguage = () => {
    const newLang = i18n.language === 'en' ? 'tr' : 'en';
    i18n.changeLanguage(newLang);
  };

  return (
    <button
      onClick={toggleLanguage}
      className="flex items-center gap-1.5 px-2 py-1.5 rounded-lg bg-primary-100 text-primary-700 hover:bg-primary-200 transition-colors text-sm"
      aria-label="Change language"
    >
      <FaGlobe className="text-sm" />
      <span className="font-semibold text-xs">
        {i18n.language === 'en' ? 'TR' : 'EN'}
      </span>
    </button>
  );
};

export default LanguageSwitcher;
