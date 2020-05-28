import React from 'react';
import Layout from '../../components/Layout';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { SectionTitle, ProjectPill } from '../../styles';
import { ProjectItem, ProjectTitle, SkillContainer, IconList } from './styles';

const Projects = ({ user }) => {
    return (
        < Layout user={user} >
            <div>
                <SectionTitle>Projects</SectionTitle>
                <ul>
                    {user.projects.map((project, i) => (
                        <ProjectItem key={i}>
                            <ProjectTitle>{project.name}
                                <IconList
                                    href={project.website}
                                    target="_blank"
                                    rel="noreferrer noopener"
                                >
                                    <FontAwesomeIcon icon={['fas', 'laptop']} />
                                </IconList>
                                <IconList
                                    href={project.githubUrl}
                                    target="_blank"
                                    rel="noreferrer noopener"
                                >
                                    <FontAwesomeIcon icon={['fab', 'github']} />
                                </IconList>
                            </ProjectTitle>
                            <p>{project.summary}</p>
                            <SkillContainer>
                                {[...project.languages, ...project.libraries].map((item, j) => (
                                    <ProjectPill key={j}>{item}</ProjectPill>
                                ))}
                            </SkillContainer>
                            {/* {[...project.images].map(image => (
                                image.resolutions.map((resolution, k) => (
                                    <img key={k} src={resolution.thumbnail.url} alt={resolution.thumbnail.url} />
                                ))
                            ))} */}
                        </ProjectItem>
                    ))}
                </ul>
            </div>
        </Layout >
    );
};

export default Projects;