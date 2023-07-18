import Header from '../../components/Header';
import HeroProcess from './components/HeroProcess';
import ContactForm from '../../components/ContactForm';
import Footer from '../../sections/Footer/Footer';
import process from './util/process';
import './Process.css'

const Process = () => {
    return (
        <>
            <Header main={false} />
            <HeroProcess>
                <div className="process-image-overlay">
                    <div className="process-header">
                        <h4 className="process-header-title">Our Process</h4>
                        <h2 className="process-header-subtitle text-title">
                            What You Can Expect When You Decide to Work With Paradise Landscapers
                        </h2>
                    </div>
                </div>
            </HeroProcess>
            <section className="process-section">
                <div className="custom-shape-divider-top-1688146915">
                    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                        <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" className="shape-fill"></path>
                    </svg>
                </div>
                <div className="process-background-1"></div>
                <div className="custom-shape-divider-top-1688147400">
                    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                        <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" className="shape-fill"></path>
                    </svg>
                </div>
                <div className="process-background-2"></div>
                <div className="process-content">
                    {process.map((item, index) =>
                        <div key={index} className="process-content-item">
                            {parseInt(item.num) % 2 !== 0 &&
                                <p className="process-item-number text-secondary">{item.num}</p>
                            }
                            <div className="process-item-container">
                                <h4 className="process-item-title text-title">{item.title}</h4>
                                <p className="process-item-text text-main">{item.description}</p>
                            </div>
                            {parseInt(item.num) % 2 === 0 &&
                                <p className="process-item-number text-secondary">{item.num}</p>
                            }
                        </div>
                    )}
                    <div className="process-contact-container">
                        <ContactForm />
                    </div>
                    <Footer main={false} />
                </div>
            </section>
        </>
    );
};

export default Process;