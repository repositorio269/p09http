import { useRef, useEffect } from "react";

export function useFadeLoad() {

    const containerRef = useRef();

    useEffect(() => {
        // containerRef.current corresponde a document.<selector>.
        containerRef.current.classList.add('fade'); // JS DOM
        setTimeout(() => {
            containerRef.current.classList.add('show');
        }, 50);
    }, [])

    return containerRef;

}

