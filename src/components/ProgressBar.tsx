import React, { useEffect, useState, useRef } from 'react';

type ProgressBarProps = {
    label: string;
    percentage: number;
    color?: string;
};

export const ProgressBar: React.FC<ProgressBarProps> = ({
                                                            label,
                                                            percentage,
                                                            color = 'bg-blue-600',
                                                        }) => {
    const [visible, setVisible] = useState(false);
    const [width, setWidth] = useState(0);
    const progressRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                const [entry] = entries;
                if (entry.isIntersecting) {
                    setVisible(true);
                    observer.unobserve(entry.target);
                }
            },
            { threshold: 0.2 }
        );

        if (progressRef.current) {
            observer.observe(progressRef.current);
        }

        return () => {
            if (progressRef.current) {
                observer.unobserve(progressRef.current);
            }
        };
    }, []);

    useEffect(() => {
        if (visible) {
            setTimeout(() => setWidth(percentage), 100);
        }
    }, [visible, percentage]);

    return (
        <div ref={progressRef} className="mb-6">
            <div className="flex justify-between mb-1">
                <span className="text-gray-300">{label}</span>
                <span className="text-gray-400">{percentage}%</span>
            </div>
            <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
                <div
                    className={`h-full ${color} transition-all duration-1000 ease-out`}
                    style={{ width: `${width}%` }}
                ></div>
            </div>
        </div>
    );
};