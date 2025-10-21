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
      className="flex items-center gap-2 px-3 py-2 rounded-lg bg-primary-100 text-primary-700 hover:bg-primary-200 transition-colors"
      aria-label="Change language"
    >
      <FaGlobe className="text-lg" />
      <span className="font-semibold text-sm">
        {i18n.language === 'en' ? 'TR' : 'EN'}
      </span>
    </button>
  );
};

export default LanguageSwitcher;
