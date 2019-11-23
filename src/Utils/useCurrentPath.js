import { useState, useEffect } from 'react';

function getCurrentPath() {
    return window.location.pathname;
}

export default function useCurrentPath() {
    const [currentPath, setCurrentPath] = useState(getCurrentPath());

    useEffect(() => {
        function handleClick() {
            setCurrentPath(getCurrentPath());
        }

        window.addEventListener('click', handleClick);
        return () => window.removeEventListener('click', handleClick);
    }, []);

    return currentPath;
}
