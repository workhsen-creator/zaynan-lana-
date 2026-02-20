import { useTranslation } from 'react-i18next';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import SectionWrapper from '../components/SectionWrapper';
import './Services.css';

interface ServiceItem {
    key: string;
    title: string;
    description: string;
    services: string[];
}

const serviceIcons: Record<string, string> = {
    marketing: '📣',
    production: '🎬',
    events: '🎤',
    ai: '🤖',
    copywriting: '✍️',
    distribution: '📡',
    performance: '📊',
    data: '💡',
};

const Services: React.FC = () => {
    const { t } = useTranslation();
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-60px' });

    const items = t('services.items', { returnObjects: true }) as ServiceItem[];

    return (
        <SectionWrapper id="services">
            <div className="container">
                <div className="services__header">
                    <span className="section-label">{t('services.sectionLabel')}</span>
                    <h2 className="section-title">{t('services.title')}</h2>
                    <hr className="section-divider" />
                    <p className="services__niche-intro">{t('services.nicheIntro')}</p>
                    <p className="services__niche">{t('services.niche')}</p>
                </div>

                <div className="services__grid" ref={ref}>
                    {items.map((item, index) => (
                        <motion.div
                            key={item.key}
                            className="service-card"
                            initial={{ opacity: 0, y: 30 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{
                                duration: 0.6,
                                delay: index * 0.08,
                                ease: [0.23, 1, 0.32, 1],
                            }}
                            whileHover={{
                                y: -6,
                                transition: { duration: 0.25 },
                            }}
                        >
                            <div className="service-card__header">
                                <span className="service-card__icon">{serviceIcons[item.key]}</span>
                                <span className="service-card__number">0{index + 1}</span>
                            </div>
                            <h3 className="service-card__title">{item.title}</h3>
                            <p className="service-card__desc">{item.description}</p>
                            <ul className="service-card__list">
                                {item.services.map((service, i) => (
                                    <li key={i} className="service-card__list-item">{service}</li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </div>
            </div>
        </SectionWrapper>
    );
};

export default Services;
