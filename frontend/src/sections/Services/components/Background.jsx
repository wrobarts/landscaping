import './Background.css';

const Background = props => {
    return (
            <div ref={props.innerRef} className="background-image">
                {props.children}
            </div>
        );
};

export default Background;