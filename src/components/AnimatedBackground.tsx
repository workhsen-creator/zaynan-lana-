import './AnimatedBackground.css';

const AnimatedBackground: React.FC = () => {
    return (
        <div className="animated-bg" aria-hidden="true">
            <div className="animated-bg__layer animated-bg__layer--1" />
            <div className="animated-bg__layer animated-bg__layer--2" />
            <div className="animated-bg__glow" />
        </div>
    );
};

export default AnimatedBackground;
