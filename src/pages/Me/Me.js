import React from 'react';
import Layout from '../../components/Layout';
import { SectionTitle, Paragraph, Pill } from '../../styles';
import { ProfileLink, LinkHover, IconList } from './styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Me = ({ user }) => {
    return (
        <Layout user={user}>
            <div>
                <SectionTitle>About Me</SectionTitle>
                <Paragraph>{user.basics.summary}</Paragraph>
            </div>
            <div>
                <SectionTitle>Skills</SectionTitle>
                <div>
                    {user.skills.map(skill => (
                        <Pill key={skill.name}>{skill.name}</Pill>
                    ))}
                </div>
            </div>
            <div>
                <SectionTitle>Profiles</SectionTitle>
                <IconList
                    href={"https://www.linkedin.com/in/jamesnathanielcox/"}
                    target="_blank"
                    rel="noreferrer noopener"
                >
                    <FontAwesomeIcon className="fa-linkedin" icon={['fab', 'linkedin']} />
                </IconList>
                <IconList
                    href={"https://github.com/jamesncox"}
                    target="_blank"
                    rel="noreferrer noopener"
                >
                    <FontAwesomeIcon icon={['fab', 'github']} />
                </IconList>
                <IconList
                    href={"https://twitter.com/MemRook"}
                    target="_blank"
                    rel="noreferrer noopener"
                >
                    <FontAwesomeIcon className="fa-twitter" icon={['fab', 'twitter-square']} />
                </IconList>
                <IconList
                    href={"https://medium.com/@jamesncox"}
                    target="_blank"
                    rel="noreferrer noopener"
                >
                    <FontAwesomeIcon icon={['fab', 'medium']} />
                </IconList>
                <IconList
                    href={"https://www.facebook.com/profile.php?id=38910177"}
                    target="_blank"
                    rel="noreferrer noopener"
                >
                    <FontAwesomeIcon className="fa-facebook" icon={['fab', 'facebook-square']} />
                </IconList>
                <IconList
                    href={"https://www.youtube.com/channel/UCtTuWJ1C92ujcxAjmdptRog?view_as=subscriber"}
                    target="_blank"
                    rel="noreferrer noopener"
                >
                    <FontAwesomeIcon className="fa-youtube" icon={['fab', 'youtube-square']} />
                </IconList>

                {/* <ul>
                    {user.basics.profiles.map((profile, i) => (
                        <ProfileLink key={profile.network}>
                            {i !== 0 && ' | '}
                            <LinkHover href={profile.url} target="_blank" rel="noreferrer noopener">
                                {profile.network}
                            </LinkHover>
                        </ProfileLink>
                    ))}
                </ul> */}
            </div>
        </Layout>
    );
};

export default Me;