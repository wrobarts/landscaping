import './HeroProcess.css';

const HeroProcess = props => {
    return (
        <div className="hero-image-process">
            {props.children}
        </div>
    );
};

export default HeroProcess;