import Header from '../../components/Header';
import Button from '../../FormElements/Button';
import './ThankYou.css';

const ThankYou = () => {
    return (
        <>
            <Header />
            <div className="thank-you">
                <div className="thank-you-content">
                    <h2>Thank you!</h2>
                    <p>We have received your email and will get back to you as soon as we can.</p>
                </div>
                <Button to="/" className="thank-you-button">Back Home</Button>
            </div>
        </>
    );
};

export default ThankYou;