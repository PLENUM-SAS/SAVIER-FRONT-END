import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface LoadingSpinnerProps {
    size?: 'sm' | 'md' | 'lg';
    className?: string;
}

export const LoadingSpinner = ({ size = 'md', className }: LoadingSpinnerProps) => {
    const sizeClasses = {
        sm: 'w-8 h-8',
        md: 'w-12 h-12',
        lg: 'w-16 h-16',
    };

    return (
        <div className={cn('relative', sizeClasses[size], className)}>
            {/* Outer ring */}
            <motion.div
                className="absolute inset-0 rounded-full border-4 border-primary/20"
                animate={{
                    rotate: 360,
                }}
                transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    ease: 'linear',
                }}
            />

            {/* Inner spinning element */}
            <motion.div
                className="absolute inset-0 rounded-full border-4 border-transparent border-t-primary"
                animate={{
                    rotate: 360,
                }}
                transition={{
                    duration: 1,
                    repeat: Infinity,
                    ease: 'linear',
                }}
            />

            {/* Center pulse */}
            <motion.div
                className="absolute inset-0 m-auto w-2 h-2 rounded-full bg-primary"
                animate={{
                    scale: [1, 1.2, 1],
                    opacity: [1, 0.7, 1],
                }}
                transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    ease: 'easeInOut',
                }}
            />
        </div>
    );
};

export default LoadingSpinner;
