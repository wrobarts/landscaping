import {Link} from 'react-router-dom';
import './ServiceItem.css';

const ServiceItem = props => {
    return (
        <div className="service-item">
            <h4 className="service-item-title text-title">{props.service.title}</h4>
            <p className="service-item-description text-main">{props.service.description}</p>
            <Link to={`/service/${props.service.id}`} className="service-item-button">
                Learn More
            </Link>
        </div>
    );
};

export default ServiceItem;