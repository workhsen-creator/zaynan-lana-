import { useState, useEffect, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import SectionWrapper from '../components/SectionWrapper';
import './Testimonials.css';

const Testimonials: React.FC = () => {
    const { t } = useTranslation();
    const [current, setCurrent] = useState(0);

    const items = t('testimonials.items', { returnObjects: true }) as Array<{
        quote: string;
        name: string;
        role: string;
    }>;

    const next = useCallback(() => {
        setCurrent((prev) => (prev + 1) % items.length);
    }, [items.length]);

    useEffect(() => {
        const interval = setInterval(next, 6000);
        return () => clearInterval(interval);
    }, [next]);

    return (
        <SectionWrapper id="testimonials">
            <div className="container container--narrow">
                <div className="testimonials__header">
                    <span className="section-label">{t('testimonials.sectionLabel')}</span>
                    <h2 className="section-title">{t('testimonials.title')}</h2>
                    <hr className="section-divider" />
                </div>

                <div className="testimonials__carousel">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={current}
                            className="testimonial"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.5, ease: [0.23, 1, 0.32, 1] }}
                        >
                            <div className="testimonial__quote-mark">"</div>
                            <blockquote className="testimonial__quote">
                                {items[current]?.quote}
                            </blockquote>
                            <div className="testimonial__author">
                                <span className="testimonial__name">{items[current]?.name}</span>
                                <span className="testimonial__role">{items[current]?.role}</span>
                            </div>
                        </motion.div>
                    </AnimatePresence>

                    <div className="testimonials__dots">
                        {items.map((_, i) => (
                            <button
                                key={i}
                                className={`testimonials__dot ${i === current ? 'testimonials__dot--active' : ''}`}
                                onClick={() => setCurrent(i)}
                                aria-label={`Go to testimonial ${i + 1}`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </SectionWrapper>
    );
};

export default Testimonials;
