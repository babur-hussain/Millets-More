export const useHaptics = () => {
    const triggerHaptic = (pattern = [15]) => {
        if (typeof window !== 'undefined' && window.navigator && window.navigator.vibrate) {
            // Elegant subtle click
            window.navigator.vibrate(pattern);
        }
    };

    return { triggerHaptic };
};
