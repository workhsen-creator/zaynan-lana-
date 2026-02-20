import { useTranslation } from 'react-i18next';
import './Footer.css';

const footerLinks = [
    { key: 'about', href: '#about' },
    { key: 'services', href: '#services' },
    { key: 'contact', href: '#contact' },
];

const Footer: React.FC = () => {
    const { t } = useTranslation();

    const handleClick = (href: string) => {
        document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <footer className="footer">
            <div className="container">
                <div className="footer__grid">
                    <div className="footer__brand">
                        <span className="footer__logo">ZAYNON LANA</span>
                        <p className="footer__tagline">{t('footer.tagline')}</p>
                    </div>

                    <div className="footer__nav">
                        <h4 className="footer__heading">{t('footer.quickLinks')}</h4>
                        <ul className="footer__links">
                            {footerLinks.map((link) => (
                                <li key={link.key}>
                                    <a
                                        href={link.href}
                                        className="footer__link"
                                        onClick={(e) => { e.preventDefault(); handleClick(link.href); }}
                                    >
                                        {t(`nav.${link.key}`)}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="footer__social">
                        <h4 className="footer__heading">{t('footer.connect')}</h4>
                        <div className="footer__social-icons">
                            <a href="#" className="footer__social-link" aria-label="LinkedIn">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                                    <rect x="2" y="9" width="4" height="12" />
                                    <circle cx="4" cy="4" r="2" />
                                </svg>
                            </a>
                            <a href="#" className="footer__social-link" aria-label="Twitter / X">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                                </svg>
                            </a>
                            <a href="#" className="footer__social-link" aria-label="Instagram">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>

                <div className="footer__bottom">
                    <p className="footer__copyright">
                        © {new Date().getFullYear()} Zaynon Lana. {t('footer.rights')}
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
