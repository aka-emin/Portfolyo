import React, { useState } from 'react';
export const Footer: React.FC = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-gray-950 py-12">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row justify-between items-center">
                    <div className="mb-6 md:mb-0">
                        <p className="text-gray-400">
                            &copy; {currentYear} Your Name. All Rights Reserved.
                        </p>
                    </div>
                    <div className="flex space-x-4">
                        <SocialLink href="#" icon={<Twitter size={20} />} label="Twitter" />
                        <SocialLink href="#" icon={<Github size={20} />} label="Github" />
                        <SocialLink href="#" icon={<Linkedin size={20} />} label="LinkedIn" />
                        <SocialLink href="#" icon={<Instagram size={20} />} label="Instagram" />
                    </div>
                </div>
            </div>
        </footer>
    );
};

type SocialLinkProps = {
    href: string;
    icon: React.ReactNode;
    label: string;
};

const SocialLink: React.FC<SocialLinkProps> = ({ href, icon, label }) => {
    return (
        <a
            href={href}
            className="h-10 w-10 bg-gray-800 rounded-full flex items-center justify-center text-gray-400 hover:bg-blue-600 hover:text-white transition-all duration-300"
            aria-label={label}
            target="_blank"
            rel="noopener noreferrer"
        >
            {icon}
        </a>
    );
};