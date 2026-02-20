import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import './LanguageToggle.css';

const LanguageToggle: React.FC = () => {
    const { i18n } = useTranslation();
    const isArabic = i18n.language === 'ar';

    const toggleLanguage = () => {
        const newLang = isArabic ? 'en' : 'ar';
        i18n.changeLanguage(newLang);
        document.documentElement.dir = newLang === 'ar' ? 'rtl' : 'ltr';
        document.documentElement.lang = newLang;
    };

    return (
        <button
            className="lang-toggle"
            onClick={toggleLanguage}
            aria-label="Toggle language"
        >
            <span className={`lang-toggle__option ${!isArabic ? 'lang-toggle__option--active' : ''}`}>
                EN
            </span>
            <span className="lang-toggle__divider">|</span>
            <span className={`lang-toggle__option ${isArabic ? 'lang-toggle__option--active' : ''}`}>
                AR
            </span>
            <motion.span
                className="lang-toggle__indicator"
                layout
                transition={{ type: 'spring', stiffness: 500, damping: 35 }}
                style={{
                    [isArabic ? 'right' : 'left']: 0,
                    [isArabic ? 'left' : 'right']: 'auto',
                }}
            />
        </button>
    );
};

export default LanguageToggle;
