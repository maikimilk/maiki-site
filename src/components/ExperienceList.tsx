import React from 'react';

interface Experience {
    title: string;
    duration: string;
}

interface ExperienceListProps {
    experiences: Experience[];
}

const ExperienceList: React.FC<ExperienceListProps> = ({ experiences }) => {
    return (
        <ul>
            {experiences.map((experience, index) => (
                <li key={index}>
                    <h3>{experience.title}</h3>
                    <p>{experience.duration}</p>
                </li>
            ))}
        </ul>
    );
};

export default ExperienceList;
