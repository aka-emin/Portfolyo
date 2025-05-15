import React, { useState } from 'react';

export const Header: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const { isDarkMode, toggleTheme } = useTheme();

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const links = [
        { name: 'Home', href: '#home' },
        { name: 'About Me', href: '#about' },
        { name: 'Resume', href: '#resume' },
        { name: 'Portfolio', href: '#portfolio' },
        { name: 'Contact', href: '#contact' },
    ];

    return (
        <header
            className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
                scrolled ? 'bg-gray-900/90 backdrop-blur-md py-3' : 'bg-transparent py-5'
            }`}
        >
            <div className="container mx-auto px-4 flex items-center justify-between">
                <a href="#home" className="text-2xl font-bold text-white hover:text-blue-500 transition">
                    Portfolio
                </a>

                {/* Desktop Navigation */}
                <nav className="hidden md:block">
                    <ul className="flex space-x-8">
                        {links.map((link) => (
                            <li key={link.name}>
                                <a
                                    href={link.href}
                                    className="text-gray-300 hover:text-blue-500 transition-colors duration-300"
                                >
                                    {link.name}
                                </a>
                            </li>
                        ))}
                        <li>
                            <button
                                onClick={toggleTheme}
                                className="text-gray-300 hover:text-blue-500 transition-colors duration-300"
                                aria-label="Toggle theme"
                            >
                                {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
                            </button>
                        </li>
                    </ul>
                </nav>

                {/* Mobile Menu Button */}
                <div className="md:hidden flex items-center">
                    <button
                        onClick={toggleTheme}
                        className="text-gray-300 hover:text-blue-500 transition-colors duration-300 mr-4"
                        aria-label="Toggle theme"
                    >
                        {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
                    </button>
                    <button
                        onClick={toggleMenu}
                        className="text-gray-300 hover:text-blue-500 transition"
                        aria-label="Toggle menu"
                    >
                        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>

                {/* Mobile Menu */}
                <div
                    className={`md:hidden fixed top-[60px] left-0 w-full h-screen bg-gray-900/95 backdrop-blur-md transform transition-transform duration-300 ${
                        isMenuOpen ? 'translate-x-0' : 'translate-x-full'
                    }`}
                >
                    <nav className="container mx-auto px-4 py-8">
                        <ul className="space-y-6">
                            {links.map((link) => (
                                <li key={link.name}>
                                    <a
                                        href={link.href}
                                        className="text-gray-300 text-xl block hover:text-blue-500 transition-colors duration-300"
                                        onClick={toggleMenu}
                                    >
                                        {link.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    );
};