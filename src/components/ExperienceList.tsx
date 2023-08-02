import React from 'react';

const ExperienceList = ({ experiences }) => {
    return (
        <ul>
            {experiences.map((experience, index) => (
                <li key={index}>
                    <h3>{experience.title}</h3>
                    <p>{experience.company}</p>
                    <p>{experience.duration}</p>
                    <p>{experience.description}</p>
                </li>
            ))}
        </ul>
    );
};

export  default ExperienceList;