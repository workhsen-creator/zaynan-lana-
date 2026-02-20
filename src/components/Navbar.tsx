import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import LanguageToggle from './LanguageToggle';
import './Navbar.css';

const navLinks = [
    { key: 'home', href: '#hero' },
    { key: 'about', href: '#about' },
    { key: 'vision', href: '#vision' },
    { key: 'services', href: '#services' },
    { key: 'testimonials', href: '#testimonials' },
    { key: 'brands', href: '#brands' },
    { key: 'contact', href: '#contact' },
];

const Navbar: React.FC = () => {
    const { t } = useTranslation();
    const [scrolled, setScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 40);
        };
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleNavClick = (href: string) => {
        setMobileOpen(false);
        const el = document.querySelector(href);
        if (el) {
            el.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <motion.nav
            className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}
            initial={{ y: -80, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
        >
            <div className="navbar__inner container">
                <a href="#hero" className="navbar__logo" onClick={(e) => { e.preventDefault(); handleNavClick('#hero'); }}>
                    ZAYNON LANA
                </a>

                {/* Desktop Nav */}
                <div className="navbar__links">
                    {navLinks.map((link) => (
                        <a
                            key={link.key}
                            href={link.href}
                            className="navbar__link"
                            onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
                        >
                            {t(`nav.${link.key}`)}
                        </a>
                    ))}
                </div>

                <div className="navbar__actions">
                    <LanguageToggle />
                    <button
                        className={`navbar__burger ${mobileOpen ? 'navbar__burger--open' : ''}`}
                        onClick={() => setMobileOpen(!mobileOpen)}
                        aria-label="Toggle menu"
                    >
                        <span /><span /><span />
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {mobileOpen && (
                    <motion.div
                        className="navbar__mobile"
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3, ease: [0.23, 1, 0.32, 1] }}
                    >
                        {navLinks.map((link, i) => (
                            <motion.a
                                key={link.key}
                                href={link.href}
                                className="navbar__mobile-link"
                                onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: i * 0.05 }}
                            >
                                {t(`nav.${link.key}`)}
                            </motion.a>
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    );
};

export default Navbar;
