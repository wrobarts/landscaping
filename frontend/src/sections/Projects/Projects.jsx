import ProjectItem from './components/ProjectItem';
import projects from './util/projects';
import './Projects.css';

const Projects = props => {
    return (
        <article ref={props.innerRef} className="projects-section">
            <header className="projects-header">
                <h4 className="text-title-secondary projects-heading">Projects</h4>
                <h2 className="text-title-secondary projects-subheading">
                    A Few Examples of What You Can Expect Working With Us
                </h2>
            </header>
            <div className="projects-ribbon-top"></div>
            <section className="projects-container">
                {projects.map((project, idx) =>
                    <ProjectItem key={idx} project={project} />
                )}
            </section>
            <div className="projects-ribbon-bottom"></div>
        </article>
    );
};

export default Projects;