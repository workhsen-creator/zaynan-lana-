import { useTranslation } from 'react-i18next';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import SectionWrapper from '../components/SectionWrapper';
import './Brands.css';

const brandNames = [
    'Islamic Heritage Foundation',
    'Faith Forward Initiative',
    'Sacred Narratives',
    'Al-Noor Media',
    'Barakah Studios',
    'Mawaddah Productions',
    'Iman Digital',
    'Risalah Network',
];

const Brands: React.FC = () => {
    const { t } = useTranslation();
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-60px' });
    const categories = t('brands.categories', { returnObjects: true }) as string[];

    return (
        <SectionWrapper id="brands">
            <div className="container">
                <div className="brands__header">
                    <span className="section-label">{t('brands.sectionLabel')}</span>
                    <h2 className="section-title">{t('brands.title')}</h2>
                    <hr className="section-divider" />
                    <p className="brands__subtitle">{t('brands.subtitle')}</p>
                    <div className="brands__categories">
                        {categories.map((cat, i) => (
                            <span key={i} className="brands__category">{cat}</span>
                        ))}
                    </div>
                </div>

                <div className="brands__grid" ref={ref}>
                    {brandNames.map((name, index) => (
                        <motion.div
                            key={name}
                            className="brand-item"
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={isInView ? { opacity: 1, scale: 1 } : {}}
                            transition={{
                                duration: 0.5,
                                delay: index * 0.08,
                                ease: [0.23, 1, 0.32, 1],
                            }}
                        >
                            <div className="brand-item__logo">
                                <span className="brand-item__initial">{name.charAt(0)}</span>
                            </div>
                            <span className="brand-item__name">{name}</span>
                        </motion.div>
                    ))}
                </div>
            </div>
        </SectionWrapper>
    );
};

export default Brands;
