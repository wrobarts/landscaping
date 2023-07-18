import {useRef} from 'react';

export const useScroll = () => {
    const elementsRef = useRef([]);

    const scrollToHandler = scrollDestination => {
        let destination;
        if (scrollDestination === "home") {
            destination = elementsRef.current[0];
        } else if (scrollDestination === "about") {
            destination = elementsRef.current[1];
        } else if (scrollDestination === "services") {
            destination = elementsRef.current[2];
        } else if (scrollDestination === "projects") {
            destination = elementsRef.current[3];
        } else if (scrollDestination === "testimonials") {
            destination = elementsRef.current[4];
        } else if (scrollDestination === "contact") {
            destination = elementsRef.current[5];
        }

        window.scrollTo({
            top: destination.offsetTop,
            behavior: "smooth"
        });
    };

    return {elementsRef, scrollToHandler};
};