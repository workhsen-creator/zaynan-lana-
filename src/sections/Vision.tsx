import { useTranslation } from 'react-i18next';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import SectionWrapper from '../components/SectionWrapper';
import './Vision.css';

interface Pillar {
    title: string;
    desc: string;
}

const Vision: React.FC = () => {
    const { t } = useTranslation();
    const pillars = t('vision.pillars', { returnObjects: true }) as Pillar[];
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-80px' });

    return (
        <SectionWrapper id="vision">
            <div className="container" ref={ref}>
                <div className="vision__split">
                    {/* LEFT — Text column */}
                    <motion.div
                        className="vision__left"
                        initial={{ opacity: 0, x: -24 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
                    >
                        <span className="section-label">{t('vision.sectionLabel')}</span>
                        <div className="vision__divider-short" />
                        <h2 className="vision__statement">{t('vision.statement')}</h2>
                        <p className="vision__description">{t('vision.description')}</p>
                        <div className="vision__motto">
                            <p className="vision__motto-line">{t('vision.motto1')}</p>
                            <p className="vision__motto-line">{t('vision.motto2')}</p>
                        </div>
                    </motion.div>

                    {/* Vertical gold divider */}
                    <motion.div
                        className="vision__vertical-divider"
                        initial={{ scaleY: 0 }}
                        animate={isInView ? { scaleY: 1 } : {}}
                        transition={{ duration: 1, ease: [0.23, 1, 0.32, 1], delay: 0.2 }}
                    />

                    {/* RIGHT — Pillar cards grid */}
                    <div className="vision__right">
                        <div className="vision__grid">
                            {pillars.map((pillar, i) => (
                                <motion.div
                                    key={i}
                                    className="vision__card"
                                    initial={{ opacity: 0, y: 16 }}
                                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                                    transition={{
                                        duration: 0.6,
                                        ease: [0.23, 1, 0.32, 1],
                                        delay: 0.15 + i * 0.1,
                                    }}
                                >
                                    <h3 className="vision__card-title">{pillar.title}</h3>
                                    <p className="vision__card-desc">{pillar.desc}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </SectionWrapper>
    );
};

export default Vision;
