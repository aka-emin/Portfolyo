import React, { useState, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';
import { Button } from '../components/Button';

export const Hero: React.FC = () => {
    const [typeText, setTypeText] = useState('');
    const titles = ['Designer', 'Developer', 'Freelancer', 'Photographer'];
    const [titleIndex, setTitleIndex] = useState(0);
    const [charIndex, setCharIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [typingDelay, setTypingDelay] = useState(200);

    useEffect(() => {
        const typingEffect = () => {
            const currentTitle = titles[titleIndex];

            if (isDeleting) {
                // Deleting text
                setTypeText(currentTitle.substring(0, charIndex - 1));
                setCharIndex(prev => prev - 1);
                setTypingDelay(100);
            } else {
                // Typing text
                setTypeText(currentTitle.substring(0, charIndex + 1));
                setCharIndex(prev => prev + 1);
                setTypingDelay(200);
            }

            // Logic for switching states
            if (!isDeleting && charIndex === currentTitle.length) {
                // Completed typing, now wait before deleting
                setIsDeleting(true);
                setTypingDelay(1500); // Pause at end of word
            } else if (isDeleting && charIndex === 0) {
                // Completed deleting, switch to next word
                setIsDeleting(false);
                setTitleIndex((prev) => (prev + 1) % titles.length);
                setTypingDelay(500); // Pause before next word
            }
        };

        const timer = setTimeout(typingEffect, typingDelay);
        return () => clearTimeout(timer);
    }, [charIndex, isDeleting, titleIndex, typingDelay, titles]);

    return (
        <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-gray-900/80 to-gray-950"></div>

            {/* Background Image */}
            <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260')] bg-cover bg-center"></div>

            {/* Content */}
            <div className="container mx-auto px-4 relative z-10 text-center">
                <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
                    Welcome
                </h1>
                <h2 className="text-2xl md:text-4xl font-semibold text-gray-200 mb-6">
                    I'm a <span className="text-blue-500 inline-block min-w-16">{typeText}</span>
                    <span className="animate-blink">|</span>
                </h2>
                <p className="text-gray-300 text-lg max-w-2xl mx-auto mb-8">
                    Based in Los Angeles, California
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                    <Button>Hire Me</Button>
                    <Button variant="outline">View My Work</Button>
                </div>
            </div>

            {/* Scroll Down Indicator */}
            <a
                href="#about"
                className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce"
            >
                <ChevronDown size={32} className="text-white" />
            </a>
        </section>
    );
};