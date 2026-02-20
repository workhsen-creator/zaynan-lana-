import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { AnimatePresence, motion } from 'framer-motion';
import AnimatedBackground from './components/AnimatedBackground';
import Navbar from './components/Navbar';
import Hero from './sections/Hero';
import About from './sections/About';
import Vision from './sections/Vision';
import Services from './sections/Services';
import Testimonials from './sections/Testimonials';
import Brands from './sections/Brands';
import Contact from './sections/Contact';
import Footer from './sections/Footer';
import PrivacyPolicy from './pages/PrivacyPolicy';
const App: React.FC = () => {
    const { i18n } = useTranslation();
    const [currentView, setCurrentView] = useState(() => window.location.hash === '#privacy-policy' ? 'privacy' : 'home');

    useEffect(() => {
        const handleHashChange = () => {
            setCurrentView(window.location.hash === '#privacy-policy' ? 'privacy' : 'home');
            window.scrollTo(0, 0);
        };
        window.addEventListener('hashchange', handleHashChange);
        return () => window.removeEventListener('hashchange', handleHashChange);
    }, []);

    useEffect(() => {
        const dir = i18n.language === 'ar' ? 'rtl' : 'ltr';
        document.documentElement.dir = dir;
        document.documentElement.lang = i18n.language;
    }, [i18n.language]);

    return (
        <AnimatePresence mode="wait">
            <motion.div
                key={i18n.language}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
            >
                <AnimatedBackground />
                <Navbar />
                <main>
                    {currentView === 'home' ? (
                        <>
                            <Hero />
                            <About />
                            <Vision />
                            <Services />
                            <Testimonials />
                            <Brands />
                            <Contact />
                        </>
                    ) : (
                        <PrivacyPolicy />
                    )}
                </main>
                <Footer />
            </motion.div>
        </AnimatePresence>
    );
};

export default App;
