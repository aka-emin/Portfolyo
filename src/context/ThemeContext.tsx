import React from 'react';

type SectionTitleProps = {
    title: string;
    subtitle?: string;
};

export const SectionTitle: React.FC<SectionTitleProps> = ({ title, subtitle }) => {
    return (
        <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">{title}</h2>
            {subtitle && (
                <p className="text-gray-400 max-w-2xl mx-auto">
                    {subtitle}
                </p>
            )}
            <div className="mt-4 inline-block">
                <div className="h-1 w-10 bg-blue-600 rounded-full"></div>
                <div className="h-1 w-20 bg-blue-600 mt-1 rounded-full"></div>
            </div>
        </div>
    );
};