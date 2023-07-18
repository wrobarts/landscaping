import {Link} from 'react-router-dom';
import './NavBar.css';

const NavBar = props => {
    const scrollToHandler = scrollDestination => {
        props.scrollToHandler(scrollDestination);
    };

    return (
        <ul className={props.main ? 'navbar' : 'navbar-project'}>
            {props.main ? (
                <>
                    <li onClick={() => scrollToHandler("home")}>
                        <p>Home</p>
                    </li>
                    <li onClick={() => scrollToHandler("about")}>
                        <p>About</p>
                    </li>
                    <li onClick={() => scrollToHandler("services")}>
                        <p>Services</p>
                    </li>
                    <li onClick={() => scrollToHandler("projects")}>
                        <p>Projects</p>
                    </li>
                    <li onClick={() => scrollToHandler("testimonials")}>
                        <p>Testimonials</p>
                    </li>
                    <li onClick={() => scrollToHandler("contact")}>
                        <p className="contact-text">Contact</p>
                    </li>
                </>
            ) : (
                <>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                </>
            )}
        </ul>
    );
};

export default NavBar;