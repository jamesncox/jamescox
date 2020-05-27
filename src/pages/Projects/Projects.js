import React from 'react';
import Layout from '../../components/Layout';
import { Code20, Wikis20 } from '@carbon/icons-react'
import { SectionTitle, Pill } from '../../styles';
import { ProjectItem, ProjectTitle, SkillContainer } from './styles';

const Projects = ({ user }) => {
    return (
        <Layout user={user}>
            <div>
                <SectionTitle>Projects</SectionTitle>
                <ul>
                    {user.projects.map((project, i) => (
                        <ProjectItem key={i}>
                            <ProjectTitle>{project.name}
                                <a href={project.website} style={{ marginLeft: "10px" }}><Wikis20 /></a>
                                <a href={project.githubUrl} style={{ marginLeft: "10px" }}><Code20 /></a>
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
        </Layout>
    );
};

export default Projects;