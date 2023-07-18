import HeroImage from './components/HeroImage';
import Button from '../../FormElements/Button';
import './Home.css';

const Home = props => {
    const scrollToHandler = scrollDestination => {
        props.scrollToHandler(scrollDestination);
    };
    
    return (
        <HeroImage innerRef={props.innerRef}>
            <div className="hero-overlay">
                <section className="hero-content">
                    <h1 className="hero-title text-title">CREATE LASTING IMPRESSIONS WITH EXCEPTIONAL LANDSCAPES</h1>
                    <h3 className="hero-subtitle text-title-accent">Paradise Landscapers</h3>
                    <Button
                        size="big"
                        className="hero-button"
                        onClick={() => scrollToHandler("contact")}
                    >
                        Request Consultation
                    </Button>
                </section>
            </div>
        </HeroImage>
    );
};

export default Home;