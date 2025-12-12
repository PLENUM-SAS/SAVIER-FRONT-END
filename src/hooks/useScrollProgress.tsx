import { useEffect, useState } from 'react';

export const useScrollProgress = () => {
    const [scrollProgress, setScrollProgress] = useState(0);

    useEffect(() => {
        const updateScrollProgress = () => {
            const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
            const scrollTop = window.pageYOffset;
            const progress = (scrollTop / scrollHeight) * 100;
            setScrollProgress(Math.min(progress, 100));
        };

        window.addEventListener('scroll', updateScrollProgress);
        updateScrollProgress(); // Initial calculation

        return () => {
            window.removeEventListener('scroll', updateScrollProgress);
        };
    }, []);

    return scrollProgress;
};

export default useScrollProgress;
