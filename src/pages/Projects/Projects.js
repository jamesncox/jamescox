import React from 'react';
import Layout from '../../components/Layout';
// import { Code24, Wikis24 } from '@carbon/icons-react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { SectionTitle, Pill } from '../../styles';
import { ProjectItem, ProjectTitle, SkillContainer, IconList } from './styles';

const Projects = ({ user }) => {
    return (
        console.log(user.projects),
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
                                {/* <LinkHover href={project.githubUrl} style={{ marginLeft: "10px" }}><Code24 /></LinkHover> */}
                            </ProjectTitle>
                            <p>{project.summary}</p>
                            <SkillContainer>
                                {[...project.languages, ...project.libraries].map((item, j) => (
                                    <Pill key={j}>{item}</Pill>
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