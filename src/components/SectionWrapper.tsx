import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

interface SectionWrapperProps {
    children: React.ReactNode;
    id?: string;
    className?: string;
    delay?: number;
}

const SectionWrapper: React.FC<SectionWrapperProps> = ({
    children,
    id,
    className = '',
    delay = 0,
}) => {
    const ref = useRef<HTMLElement>(null);
    const isInView = useInView(ref, { once: true, margin: '-80px' });

    return (
        <motion.section
            ref={ref}
            id={id}
            className={`section ${className}`}
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
            transition={{
                duration: 0.8,
                delay,
                ease: [0.23, 1, 0.32, 1],
            }}
        >
            {children}
        </motion.section>
    );
};

export default SectionWrapper;
