import {Link} from 'react-router-dom';
import './Footer.css';

const Footer = props => {
    const scrollToHandler = scrollDestination => {
        props.scrollToHandler(scrollDestination);
    };

    return (
        <footer className="footer">
            <section className="footer-top">
                <div className="footer-top-left">
                    <img
                        src={require("../../images/landscape_logo.png")}
                        alt="logo"
                        className="footer-logo"
                    />
                    <h3 className="footer-company-name text-title">Paradise Landscapers</h3>
                </div>
                <div className="footer-top-middle">
                    <h5 className="footer-office text-main">Main Office</h5>
                    <p className="footer-text text-main">[Phone Number]</p>
                    <p className="footer-text text-main">[Email Address]</p>
                    <p className="footer-text text-main">[Location]</p>
                </div>
                <div className="footer-top-right">
                    {props.main && <p className="footer-link" onClick={() => scrollToHandler("home")}>Home</p>}
                    {props.main && <p className="footer-link" onClick={() => scrollToHandler("services")}>Services</p>}
                    {props.main && <p className="footer-link" onClick={() => scrollToHandler("contact")}>Contact</p>}
                    {!props.main && <Link to="/" >Home</Link>}
                </div>
            </section>
            <hr></hr>
            <section className="footer-bottom">
                <p className="footer-text text-main">@2023 Paradise Landscapers</p>
                <p className="footer-text text-main">Website by Weston Robarts</p>
                <Link to="/privacy" className="footer-text footer-text-right text-main">Privacy Policy</Link>
            </section>
        </footer>
    );
};

export default Footer;