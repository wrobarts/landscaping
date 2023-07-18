import Header from '../../components/Header';
import Footer from '../../sections/Footer/Footer';
import privacy from './util/privacy';
import './Privacy.css';

const Privacy = () => {
    return (
        <>
            <Header />
            <section className="privacy">
                {privacy.map((titleItem, index) =>
                    <div key={index} className="privacy-section">
                        <h2>{titleItem.title}</h2>
                        {titleItem.sections.map((sectionItem, index) =>
                            <div key={index} className="privacy-subsection">
                                <h3>{sectionItem.title}</h3>
                                <p>{sectionItem.description}</p>
                            </div>
                        )}
                    </div>
                )}
            </section>
            <Footer />
        </>
    );
};

export default Privacy;