import { useTranslation } from 'react-i18next';
import {
    motion,
    useInView,
    useScroll,
    useTransform,
} from 'framer-motion';
import { useRef, useMemo } from 'react';
import SectionWrapper from '../components/SectionWrapper';
import './About.css';

/* Luxury easing curve */
const EASE: [number, number, number, number] = [0.23, 1, 0.32, 1];

/* ------------------------------------------------------------------ */
/*  Word-by-word headline reveal                                      */
/* ------------------------------------------------------------------ */
const WordReveal: React.FC<{ text: string; inView: boolean }> = ({
    text,
    inView,
}) => {
    const words = useMemo(() => text.split(' '), [text]);

    return (
        <span className="about-cinema__word-wrap">
            {words.map((word, i) => (
                <motion.span
                    key={i}
                    className="about-cinema__word"
                    initial={{ opacity: 0, y: 20, scale: 0.98 }}
                    animate={
                        inView
                            ? { opacity: 1, y: 0, scale: 1 }
                            : {}
                    }
                    transition={{
                        duration: 0.7,
                        delay: 0.15 + i * 0.09,
                        ease: EASE,
                    }}
                >
                    {word}
                </motion.span>
            ))}
        </span>
    );
};

/* ------------------------------------------------------------------ */
/*  Main About component — 3 zones                                    */
/* ------------------------------------------------------------------ */
const About: React.FC = () => {
    const { t, i18n } = useTranslation();
    const isRtl = i18n.language === 'ar';

    const sectionRef = useRef<HTMLDivElement>(null);
    const heroRef = useRef<HTMLDivElement>(null);
    const splitRef = useRef<HTMLDivElement>(null);

    const heroInView = useInView(heroRef, { once: true, margin: '-60px' });
    const splitInView = useInView(splitRef, { once: true, margin: '-80px' });

    /* Parallax for background word */
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ['start end', 'end start'],
    });
    const bgY = useTransform(scrollYProgress, [0, 1], ['10%', '-10%']);

    return (
        <SectionWrapper id="about" className="about-cinema">
            <div className="about-cinema__layers" ref={sectionRef}>
                {/* ── Background Depth ────────────────────── */}
                {/* Radial glow */}
                <div className="about-cinema__glow" />

                {/* Faint large word */}
                <motion.div
                    className="about-cinema__bg-word"
                    style={{ y: bgY }}
                    aria-hidden="true"
                >
                    {isRtl ? 'الهدف' : 'PURPOSE'}
                </motion.div>

                {/* Blur gradient overlay */}
                <div className="about-cinema__blur-overlay" />

                {/* ── ZONE 1 — Hero Headline ────────────── */}
                <div className="about-cinema__hero" ref={heroRef}>
                    {/* Label */}
                    <motion.span
                        className="about-cinema__label"
                        initial={{ opacity: 0, y: 12 }}
                        animate={heroInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.6, ease: EASE }}
                    >
                        {t('about.sectionLabel')}
                    </motion.span>

                    {/* Headline with word-by-word reveal */}
                    <h2 className="about-cinema__headline">
                        <WordReveal
                            text={t('about.title')}
                            inView={heroInView}
                        />
                    </h2>

                    {/* Expanding gold underline */}
                    <motion.div
                        className="about-cinema__underline"
                        initial={{ scaleX: 0 }}
                        animate={heroInView ? { scaleX: 1 } : {}}
                        transition={{ duration: 1.1, ease: EASE, delay: 0.6 }}
                    />

                    {/* Intro text beneath headline */}
                    <motion.p
                        className="about-cinema__intro"
                        initial={{ opacity: 0, y: 18 }}
                        animate={heroInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.8, ease: EASE, delay: 0.75 }}
                    >
                        {t('about.intro')}
                    </motion.p>
                </div>

                {/* ── ZONE 2 — Split Layout ─────────────── */}
                <div className="about-cinema__split" ref={splitRef}>
                    {/* Left: manifesto sentence + vertical line */}
                    <div className="about-cinema__left">
                        <motion.div
                            className="about-cinema__vline"
                            initial={{ scaleY: 0 }}
                            animate={splitInView ? { scaleY: 1 } : {}}
                            transition={{
                                duration: 1.2,
                                ease: EASE,
                                delay: 0.1,
                            }}
                        />
                        <motion.p
                            className="about-cinema__manifesto"
                            initial={{ opacity: 0, y: 20 }}
                            animate={
                                splitInView
                                    ? { opacity: 1, y: 0 }
                                    : {}
                            }
                            transition={{
                                duration: 0.9,
                                ease: EASE,
                                delay: 0.25,
                            }}
                        >
                            {t('about.purpose')}
                        </motion.p>
                    </div>

                    {/* Right: supporting paragraphs */}
                    <div className="about-cinema__right">
                        {(['p1', 'p2', 'p3'] as const).map((key, i) => (
                            <motion.p
                                key={key}
                                className="about-cinema__para"
                                initial={{ opacity: 0, y: 22 }}
                                animate={
                                    splitInView
                                        ? { opacity: 1, y: 0 }
                                        : {}
                                }
                                transition={{
                                    duration: 0.8,
                                    ease: EASE,
                                    delay: 0.3 + i * 0.14,
                                }}
                            >
                                {t(`about.${key}`)}
                            </motion.p>
                        ))}
                    </div>
                </div>

                {/* ── Closing Statement ────────────────── */}
                <motion.div
                    className="about-cinema__closing"
                    initial={{ opacity: 0, y: 20 }}
                    animate={splitInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.9, ease: EASE, delay: 0.75 }}
                >
                    <p className="about-cinema__closing-lead">
                        {t('about.closingLead')}
                    </p>
                    <p className="about-cinema__closing-emphasis">
                        {t('about.closingEmphasis')}
                    </p>
                </motion.div>
            </div>
        </SectionWrapper>
    );
};

export default About;
