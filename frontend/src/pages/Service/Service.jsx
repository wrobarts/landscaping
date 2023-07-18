import {useParams} from 'react-router-dom';
import Header from '../../components/Header';
import Footer from '../../sections/Footer/Footer';
import ContactForm from '../../components/ContactForm';
import services from './util/services';
import './Service.css';

const Service = () => {
    const serviceId = useParams().sid;

    const service = services.find(service => service.id === serviceId);

    return (
        <>
            <Header main={false} />
            <section className="service-section">
                <h2 className="service-title">{service.title}</h2>
                <img className="service-image" src={service.image} alt={service.title} />
                <div className="service-description-container">
                    {service.description.map((item, index) =>
                        <p key={index} className="service-description text-main">{item}</p>
                    )}
                </div>
                <div className="service-ribbon"></div>
                <div className="contact-form-container">
                    <ContactForm />
                </div>
            </section>
            <Footer main={false} />
        </>
    );
};

export default Service;