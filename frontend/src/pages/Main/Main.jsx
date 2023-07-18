import Header from '../../components/Header';
import Home from '../../sections/Home/Home';
import About from '../../sections/About/About';
import Services from '../../sections/Services/Services';
import Projects from '../../sections/Projects/Projects';
import Testimonials from '../../sections/Testimonials/Testimonials';
import Contact from '../../sections/Contact/Contact';
import Footer from '../../sections/Footer/Footer';
import {useScroll} from '../../hooks/scroll_hook';
import './Main.css';

const Main = () => {
    const {elementsRef, scrollToHandler} = useScroll();

    return (
        <>
            <Header main={true} scrollToHandler={scrollToHandler} />
            <div className="inner-wrapper">
                <Home innerRef={home => elementsRef.current[0] = home} scrollToHandler={scrollToHandler} />
                <About innerRef={about => elementsRef.current[1] = about} />
                <Services innerRef={services => elementsRef.current[2] = services} />
                <Projects innerRef={projects => elementsRef.current[3] = projects} />
                <Testimonials innerRef={testimonials => elementsRef.current[4] = testimonials} />
                <Contact innerRef={contact => elementsRef.current[5] = contact} />
                <Footer main={true} scrollToHandler={scrollToHandler} />
            </div>
        </>
    );
};

export default Main;