import { useTranslation } from 'react-i18next';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import SectionWrapper from '../components/SectionWrapper';
import './Contact.css';

/* Luxury easing */
const EASE: [number, number, number, number] = [0.23, 1, 0.32, 1];

/* ------------------------------------------------------------------ */
/*  SVG Icon components — animated inline                              */
/* ------------------------------------------------------------------ */
const LocationIcon = () => (
    <svg
        className="contact-card__svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
    >
        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" />
        <circle cx="12" cy="9" r="2.5" />
    </svg>
);

const PhoneIcon = () => (
    <svg
        className="contact-card__svg contact-card__svg--phone"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
    >
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
);

const EmailIcon = () => (
    <svg
        className="contact-card__svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
    >
        <rect x="2" y="4" width="20" height="16" rx="2" />
        <path d="M22 4L12 13 2 4" />
    </svg>
);

const GlobeIcon = () => (
    <svg
        className="contact-card__svg contact-card__svg--globe"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
    >
        <circle cx="12" cy="12" r="10" />
        <ellipse cx="12" cy="12" rx="4" ry="10" />
        <line x1="2" y1="12" x2="22" y2="12" />
    </svg>
);

/* ------------------------------------------------------------------ */
/*  Contact card component                                             */
/* ------------------------------------------------------------------ */
interface CardProps {
    icon: React.ReactNode;
    label: string;
    children: React.ReactNode;
    delay: number;
    inView: boolean;
}

const ContactCard: React.FC<CardProps> = ({
    icon,
    label,
    children,
    delay,
    inView,
}) => (
    <motion.div
        className="contact-card"
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, ease: EASE, delay }}
    >
        <div className="contact-card__icon">{icon}</div>
        <h3 className="contact-card__label">{label}</h3>
        <div className="contact-card__content">{children}</div>
    </motion.div>
);

/* ------------------------------------------------------------------ */
/*  Main Contact component                                             */
/* ------------------------------------------------------------------ */
const Contact: React.FC = () => {
    const { t } = useTranslation();
    const ref = useRef<HTMLDivElement>(null);
    const isInView = useInView(ref, { once: true, margin: '-80px' });

    const locations = t('contact.locations.items', {
        returnObjects: true,
    }) as string[];

    return (
        <SectionWrapper id="contact" className="contact-premium">
            {/* Background glow */}
            <div className="contact-premium__glow" />

            <div className="container" ref={ref}>
                {/* Header */}
                <motion.div
                    className="contact-premium__header"
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8, ease: EASE }}
                >
                    <h2 className="contact-premium__title">
                        {t('contact.title')}
                    </h2>
                    <motion.div
                        className="contact-premium__underline"
                        initial={{ scaleX: 0 }}
                        animate={isInView ? { scaleX: 1 } : {}}
                        transition={{
                            duration: 1,
                            ease: EASE,
                            delay: 0.3,
                        }}
                    />
                    <p className="contact-premium__subtitle">
                        {t('contact.subtitle')}
                    </p>
                </motion.div>

                {/* Cards grid */}
                <div className="contact-premium__grid">
                    {/* 1 — Locations */}
                    <ContactCard
                        icon={<LocationIcon />}
                        label={t('contact.locations.label')}
                        delay={0.15}
                        inView={isInView}
                    >
                        {locations.map((loc, i) => (
                            <span key={i} className="contact-card__line">
                                {loc}
                            </span>
                        ))}
                    </ContactCard>

                    {/* 2 — Phone */}
                    <ContactCard
                        icon={<PhoneIcon />}
                        label={t('contact.phone.label')}
                        delay={0.3}
                        inView={isInView}
                    >
                        <span className="contact-card__line">
                            {t('contact.phone.value')}
                        </span>
                    </ContactCard>

                    {/* 3 — Email */}
                    <ContactCard
                        icon={<EmailIcon />}
                        label={t('contact.email.label')}
                        delay={0.45}
                        inView={isInView}
                    >
                        <a
                            href={`mailto:${t('contact.email.value')}`}
                            className="contact-card__link"
                        >
                            {t('contact.email.value')}
                        </a>
                    </ContactCard>

                    {/* 4 — Website */}
                    <ContactCard
                        icon={<GlobeIcon />}
                        label={t('contact.website.label')}
                        delay={0.6}
                        inView={isInView}
                    >
                        <a
                            href={`https://${t('contact.website.value')}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="contact-card__link"
                        >
                            {t('contact.website.value')}
                        </a>
                    </ContactCard>
                </div>
            </div>
        </SectionWrapper>
    );
};

export default Contact;
