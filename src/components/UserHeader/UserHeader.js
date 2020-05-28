import React from 'react';
import { useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { HeaderContainer, Header, Image, ViewResumeLink, LinkHover } from './styles';

const UserHeader = ({ user }) => {
    const location = useLocation();

    return (
        <HeaderContainer isHome={location.pathname === '/'}>
            <Header>
                <Image src={user.basics.picture} />
                <div>
                    <h2>{user.basics.name}{' '}
                        <LinkHover
                            href={`https://gitconnected.com/${user.basics.username}`}
                            target="_blank"
                            rel="noreferrer noopener"
                            style={{ textDecoration: "none" }}
                        >
                            (@{user.basics.username})
                        </LinkHover>
                    </h2>
                    <p>{user.basics.label}</p>
                    <p>Coding in {user.basics.region}</p>
                    <p>{user.basics.yearsOfExperience} years of experience as a developer</p>
                    <p>{user.basics.headline}</p>
                </div>
            </Header>
            <div>
                <ViewResumeLink
                    href={`https://gitconnected.com/${user.basics.username}/resume`}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <span>View Resume</span>
                    <FontAwesomeIcon style={{ fontSize: "20px" }} icon="arrow-circle-right" />
                </ViewResumeLink>
            </div>
        </HeaderContainer>
    );
};

export default UserHeader;