import { motion } from 'framer-motion';
import { useScrollProgress } from '@/hooks/useScrollProgress';

export const ScrollProgress = () => {
    const progress = useScrollProgress();

    return (
        <>
            {/* Progress bar en la parte superior */}
            <motion.div
                className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-accent to-secondary z-50 origin-left"
                style={{ scaleX: progress / 100 }}
                initial={{ scaleX: 0 }}
            />

            {/* Indicador circular (opcional) */}
            {progress > 10 && (
                <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0 }}
                    className="fixed bottom-8 right-8 z-50"
                >
                    <div className="relative w-14 h-14">
                        {/* Background circle */}
                        <svg className="w-full h-full transform -rotate-90">
                            <circle
                                cx="28"
                                cy="28"
                                r="24"
                                stroke="currentColor"
                                strokeWidth="4"
                                fill="none"
                                className="text-muted/20"
                            />
                            {/* Progress circle */}
                            <motion.circle
                                cx="28"
                                cy="28"
                                r="24"
                                stroke="currentColor"
                                strokeWidth="4"
                                fill="none"
                                strokeDasharray={`${2 * Math.PI * 24}`}
                                strokeDashoffset={`${2 * Math.PI * 24 * (1 - progress / 100)}`}
                                className="text-primary"
                                strokeLinecap="round"
                            />
                        </svg>
                        {/* Percentage text */}
                        <div className="absolute inset-0 flex items-center justify-center">
                            <span className="text-xs font-bold text-foreground">
                                {Math.round(progress)}%
                            </span>
                        </div>
                    </div>
                </motion.div>
            )}
        </>
    );
};

export default ScrollProgress;
