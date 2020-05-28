import styled from 'styled-components'
import { black, blue } from '@carbon/colors'

export const ProjectItem = styled.li`
  margin-top: 1rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid ${black};
`

export const ProjectTitle = styled.h4`
  font-weight: bold;
`

export const SkillContainer = styled.div`
  margin-top: 1.2rem;
`

export const LinkHover = styled.a`
  &:hover {
    fill: ${blue[60]};
  }
`;

export const IconList = styled.a`
  display: inline-block;
  paddin-bottom: 5px;
  font-size: 20px;
  width: 50px;
  text-align: center;
  text-decoration: none;
  margin-right: -15px;
  &:hover {
    opacity: 0.8;
    color: ${blue[60]};
  }
`
