import { useEffect, useRef } from 'react';

export const useSwipeZoom = () => {
    const containerRef = useRef(null);

    useEffect(() => {
        const container = containerRef.current;
        if (!container) return;

        let isScrolling;

        const handleScroll = () => {
            const cards = container.querySelectorAll('.collection-card');
            const containerCenter = container.offsetWidth / 2;

            cards.forEach(card => {
                const img = card.querySelector('.collection-img');
                if (!img) return;

                const cardRect = card.getBoundingClientRect();
                const cardCenter = cardRect.left + (cardRect.width / 2);

                // Calculate distance from center (0 = perfectly centered)
                const distance = Math.abs(containerCenter - cardCenter);

                // Max zoom when centered, slightly scales down as it moves away
                // using a very gentle curve for luxury feel
                const maxDistance = container.offsetWidth;
                const normalizedDistance = Math.min(distance / maxDistance, 1);

                // scale between 1 and 1.08
                const scale = 1.08 - (normalizedDistance * 0.08);

                img.style.transform = `scale(${scale})`;
            });

            // Clean up snapping scale
            window.clearTimeout(isScrolling);
            isScrolling = setTimeout(() => {
                // Ensure the snapped item rests at perfect 1.08
            }, 50);
        };

        container.addEventListener('scroll', handleScroll, { passive: true });
        // Trigger once to set initial state
        handleScroll();

        return () => container.removeEventListener('scroll', handleScroll);
    }, []);

    return { carouselRef: containerRef };
};
