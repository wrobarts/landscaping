import Background from './components/Background';
import ServiceItem from './components/ServiceItem';
import services from './util/services';
import './Services.css';

const Services = props => {
    return (
        <Background innerRef={props.innerRef}>
            <header className="services-header">
                <h4 className="text-title-secondary services-heading">Services</h4>
                <h2 className="text-title-secondary services-subheading">
                    Unlock the Full Potential of Your Outdoor Oasis
                </h2>
            </header>
            <section className="services-section">
                {services.map((service, idx) =>
                    <ServiceItem key={idx} service={service} />
                )}
            </section>
        </Background>
    );
};

export default Services;