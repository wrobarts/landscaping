import './ContactBackground.css';

const ContactBackground = props => {
    return (
        <div ref={props.innerRef} className="contact-background">
            {props.children}
        </div>
    );
};

export default ContactBackground;