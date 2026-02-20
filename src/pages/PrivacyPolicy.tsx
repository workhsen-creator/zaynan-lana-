import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import './PrivacyPolicy.css';

const PrivacyPolicy: React.FC = () => {
    const { t, i18n } = useTranslation();
    const isAr = i18n.language === 'ar';

    // Retrieve sections from translations
    const sections = t('privacy.sections', { returnObjects: true }) as Array<{ title: string; content: string[] }>;

    return (
        <section className="privacy-policy" dir={isAr ? 'rtl' : 'ltr'}>
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="privacy-policy__content"
                >
                    <h1 className="privacy-policy__title">{t('privacy.title')}</h1>

                    <div className="privacy-policy__body">
                        {Array.isArray(sections) && sections.map((section, index) => (
                            <div key={index} className="privacy-policy__section">
                                <h2 className="privacy-policy__section-title">{section.title}</h2>
                                {Array.isArray(section.content) && section.content.map((paragraph, pIndex) => (
                                    <p key={pIndex} className="privacy-policy__text">{paragraph}</p>
                                ))}
                            </div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default PrivacyPolicy;
