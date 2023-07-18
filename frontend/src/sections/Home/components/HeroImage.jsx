import './HeroImage.css';

const HeroImage = props => {
    return (
        <div ref={props.innerRef} className="hero-image">
            {props.children}
        </div>
    );
};

export default HeroImage;