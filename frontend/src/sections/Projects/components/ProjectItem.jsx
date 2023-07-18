import './ProjectItem.css';

const ProjectItem = props => {
    return (
        <div className="project-item">
            <img src={props.project.img_src} alt={props.project.title} />
            <div className="project-info">
                <h4 className="text-title project-title">{props.project.title}</h4>
                <p className="text-main project-description">{props.project.description}</p>
            </div>
        </div>
    );
};

export default ProjectItem;