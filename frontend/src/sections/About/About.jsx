import Button from '../../FormElements/Button';
import './About.css';

const About = props => {
    return (
        <article ref={props.innerRef} className="about-section">
            <section className="about-content-left">
                <img
                    className="about-image"
                    alt="about"
                    src={require("../../images/landscape_about.jpeg")}
                />
            </section>
            <section className="about-content-right">
                <h4 className="text-title about-heading">About</h4>
                <h2 className="text-title about-subheading">Transforming Outdoor Spaces with Unparalleled Expertise</h2>
                <p className="text-main about-text">
                    At Paradise Landscapers, we are passionate about creating breathtaking
                    outdoor spaces that leave a lasting impression. With years of experience
                    and a team of dedicated professionals, we have established ourselves as
                    a trusted name in the landscaping industry.
                </p>
                <p className="text-main about-text">
                    From concept to completion, we work closely with our clients to understand
                    their unique vision, preferences, and lifestyle. Our talented designers
                    and skilled landscapers collaborate seamlessly to transform your ideas
                    into a reality that surpasses your expectations.
                </p>
                <Button to="/process" size="big" className="about-button">Our Process</Button>
            </section>
        </article>
    );
};

export default About;