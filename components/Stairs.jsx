import React from 'react';
import { motion } from 'framer-motion';

const stairAnime = {
    initial: {
        top: '0%',
    },
    animate: {
        top: '100%',
    },
    exit: {
        top: ['100%','0%']
    },
};

export default function Stairs() {
    const reversibleIndex = (i) => {
        const StepCount = 6;
        return StepCount - i - 1;
    };

    return (
        <>
            {[...Array(6)].map((_, index) => (
                <motion.div
                    key={index}
                    variants={stairAnime}
                    initial='initial'
                    animate='animate'
                    exit='exit'
                    transition={{
                        duration: 0.4,
                        ease: 'easeInOut',
                        delay: reversibleIndex(index) * 0.1,
                    }}
                    className='h-full w-full bg-white relative'
                />
            ))}
        </>
    );
}
