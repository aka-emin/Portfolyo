import React from 'react';
import { SectionTitle } from '../components/SectionTitle';
import { ProgressBar } from '../components/ProgressBar';
import { Button } from '../components/Button';
import { Download, Mail, Calendar, MapPin } from 'lucide-react';

export const About: React.FC = () => {
    const skills = [
        { name: 'Web Design', percentage: 95 },
        { name: 'HTML/CSS', percentage: 90 },
        { name: 'JavaScript', percentage: 85 },
        { name: 'React', percentage: 80 },
        { name: 'Graphic Design', percentage: 75 },
        { name: 'WordPress', percentage: 70 },
    ];

    return (
        <section id="about" className="py-20 bg-gray-950">
            <div className="container mx-auto px-4">
                <SectionTitle
                    title="About Me"
                    subtitle="Get to know more about me and my skills"
                />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    {/* About Me Text */}
                    <div>
                        <h3 className="text-2xl font-semibold text-white mb-4">
                            I'm <span className="text-blue-500">Your Name</span>, a Web Developer
                        </h3>
                        <p className="text-gray-400 mb-4">
                            I help you build brand for your business at an affordable price. Thousands of clients have procured exceptional results while working with me. Delivering work within time and budget which meets client's requirements is our motto.
                        </p>
                        <p className="text-gray-400 mb-6">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at diam magna. Fusce sit amet eros erat. In tincidunt congue tortor, non vehicula magna eleifend eu.
                        </p>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                            <div className="flex items-center">
                                <Mail className="text-blue-500 mr-3" size={18} />
                                <div>
                                    <p className="text-gray-400">Email</p>
                                    <p className="text-white">your.email@example.com</p>
                                </div>
                            </div>
                            <div className="flex items-center">
                                <Calendar className="text-blue-500 mr-3" size={18} />
                                <div>
                                    <p className="text-gray-400">Date of Birth</p>
                                    <p className="text-white">January 1, 1990</p>
                                </div>
                            </div>
                            <div className="flex items-center">
                                <MapPin className="text-blue-500 mr-3" size={18} />
                                <div>
                                    <p className="text-gray-400">Location</p>
                                    <p className="text-white">Los Angeles, CA</p>
                                </div>
                            </div>
                        </div>

                        <Button className="mt-4">
                            <Download className="mr-2" size={18} />
                            Download CV
                        </Button>
                    </div>

                    {/* Skills */}
                    <div>
                        <h3 className="text-2xl font-semibold text-white mb-6">My Skills</h3>
                        {skills.map((skill) => (
                            <ProgressBar
                                key={skill.name}
                                label={skill.name}
                                percentage={skill.percentage}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};