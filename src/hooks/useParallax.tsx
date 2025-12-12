import { useEffect, useRef, useState } from 'react';

interface ParallaxOptions {
    speed?: number;
    direction?: 'vertical' | 'horizontal';
}

export const useParallax = (options: ParallaxOptions = {}) => {
    const { speed = 0.5, direction = 'vertical' } = options;
    const ref = useRef<HTMLElement>(null);
    const [offset, setOffset] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            if (!ref.current) return;

            const rect = ref.current.getBoundingClientRect();
            const scrollPosition = window.pageYOffset;
            const elementTop = rect.top + scrollPosition;
            const windowHeight = window.innerHeight;
            const elementHeight = rect.height;

            // Calculate if element is in viewport
            if (
                scrollPosition + windowHeight > elementTop &&
                scrollPosition < elementTop + elementHeight
            ) {
                const parallaxOffset = (scrollPosition - elementTop) * speed;
                setOffset(parallaxOffset);
            }
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll(); // Initial calculation

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [speed]);

    const style =
        direction === 'vertical'
            ? { transform: `translateY(${offset}px)` }
            : { transform: `translateX(${offset}px)` };

    return { ref, style, offset };
};

export default useParallax;
