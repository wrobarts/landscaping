import './TestimonialItem.css';

const TestimonialItem = props => {
    return (
        <div className="testimonial-item">
            <blockquote className="testimonial-text text-main-secondary">
                {props.testimonial.body}
            </blockquote>
            <h4 className="testimonial-info text-main-secondary">
                {`~ ${props.testimonial.author}, ${props.testimonial.location} ~`}
            </h4>
        </div>
    );
};

export default TestimonialItem;