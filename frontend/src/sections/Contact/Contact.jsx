import ContactBackground from './components/ContactBackground';
import ContactForm from '../../components/ContactForm';
import './Contact.css';

const Contact = props => {
    return (
        <ContactBackground innerRef={props.innerRef}>
            <ContactForm />
        </ContactBackground>
    );
};

export default Contact;