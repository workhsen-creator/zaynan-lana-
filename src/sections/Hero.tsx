import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import Button from '../components/Button';
import './Hero.css';

const Hero: React.FC = () => {
    const { t } = useTranslation();

    const handleCTA = () => {
        document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <section id="hero" className="hero">
            <div className="hero__bg" />
            <div className="hero__overlay" />
            <div className="hero__content container">
                <motion.div
                    className="hero__text"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.3, ease: [0.23, 1, 0.32, 1] }}
                >
                    <motion.h1
                        className="hero__headline"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.5, ease: [0.23, 1, 0.32, 1] }}
                    >
                        {t('hero.headline')}
                    </motion.h1>

                    <motion.p
                        className="hero__subheadline"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.7, ease: [0.23, 1, 0.32, 1] }}
                    >
                        {t('hero.subheadline')}
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.9, ease: [0.23, 1, 0.32, 1] }}
                    >
                        <Button onClick={handleCTA}>{t('hero.cta')}</Button>
                    </motion.div>
                </motion.div>

                {/* Decorative element */}
                <motion.div
                    className="hero__accent-line"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 1.2, delay: 1.2, ease: [0.23, 1, 0.32, 1] }}
                />
            </div>
        </section>
    );
};

export default Hero;
