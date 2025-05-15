import React, { useState, useEffect } from 'react';
import { SectionTitle } from '../components/SectionTitle';
import { ExternalLink } from 'lucide-react';

type Project = {
    id: number;
    title: string;
    category: string;
    image: string;
    url: string;
};

type FilterCategory = 'all' | 'web' | 'app' | 'design';

export const Portfolio: React.FC = () => {
    const [selectedCategory, setSelectedCategory] = useState<FilterCategory>('all');
    const [filteredProjects, setFilteredProjects] = useState<Project[]>([]);

    const projects: Project[] = [
        {
            id: 1,
            title: 'E-commerce Website',
            category: 'web',
            image: 'https://images.pexels.com/photos/39284/macbook-apple-imac-computer-39284.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            url: '#',
        },
        {
            id: 2,
            title: 'Mobile App UI',
            category: 'app',
            image: 'https://images.pexels.com/photos/4386431/pexels-photo-4386431.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            url: '#',
        },
        {
            id: 3,
            title: 'Brand Identity',
            category: 'design',
            image: 'https://images.pexels.com/photos/461077/pexels-photo-461077.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            url: '#',
        },
        {
            id: 4,
            title: 'Portfolio Website',
            category: 'web',
            image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            url: '#',
        },
        {
            id: 5,
            title: 'Food Delivery App',
            category: 'app',
            image: 'https://images.pexels.com/photos/1092644/pexels-photo-1092644.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            url: '#',
        },
        {
            id: 6,
            title: 'Logo Collection',
            category: 'design',
            image: 'https://images.pexels.com/photos/6224/hands-people-woman-working.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            url: '#',
        },
    ];

    useEffect(() => {
        if (selectedCategory === 'all') {
            setFilteredProjects(projects);
        } else {
            setFilteredProjects(projects.filter(project => project.category === selectedCategory));
        }
    }, [selectedCategory]);

    return (
        <section id="portfolio" className="py-20 bg-gray-950">
            <div className="container mx-auto px-4">
                <SectionTitle
                    title="My Portfolio"
                    subtitle="A showcase of my best work and projects"
                />

                {/* Filter Buttons */}
                <div className="flex flex-wrap justify-center mb-12 gap-2">
                    <FilterButton
                        active={selectedCategory === 'all'}
                        onClick={() => setSelectedCategory('all')}
                    >
                        All
                    </FilterButton>
                    <FilterButton
                        active={selectedCategory === 'web'}
                        onClick={() => setSelectedCategory('web')}
                    >
                        Web
                    </FilterButton>
                    <FilterButton
                        active={selectedCategory === 'app'}
                        onClick={() => setSelectedCategory('app')}
                    >
                        App
                    </FilterButton>
                    <FilterButton
                        active={selectedCategory === 'design'}
                        onClick={() => setSelectedCategory('design')}
                    >
                        Design
                    </FilterButton>
                </div>

                {/* Portfolio Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredProjects.map(project => (
                        <ProjectCard key={project.id} project={project} />
                    ))}
                </div>
            </div>
        </section>
    );
};

type FilterButtonProps = {
    children: React.ReactNode;
    active: boolean;
    onClick: () => void;
};

const FilterButton: React.FC<FilterButtonProps> = ({ children, active, onClick }) => {
    return (
        <button
            className={`px-6 py-2 rounded-full transition-all duration-300 ${
                active
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-800 text-gray-400 hover:bg-gray-700 hover:text-gray-200'
            }`}
            onClick={onClick}
        >
            {children}
        </button>
    );
};

type ProjectCardProps = {
    project: Project;
};

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
    return (
        <div className="group relative overflow-hidden rounded-lg bg-gray-800 hover:shadow-xl transition-all duration-300">
            <div className="aspect-square overflow-hidden">
                <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
            </div>

            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-blue-900/90 to-gray-900/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <h3 className="text-xl font-semibold text-white mb-2 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                    {project.title}
                </h3>
                <p className="text-blue-300 mb-4 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 delay-100">
                    {project.category}
                </p>
                <a
                    href={project.url}
                    className="inline-flex items-center text-white hover:text-blue-300 transition-colors duration-300 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 delay-200"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    View Project <ExternalLink size={18} className="ml-2" />
                </a>
            </div>
        </div>
    );
};