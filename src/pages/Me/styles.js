import styled from 'styled-components'
import { blue } from '@carbon/colors'

export const ProfileLink = styled.li`
  margin-right: 0.5rem;
  margin-bottom: 0.5rem;
  display: inline-block;
  font-size: 18px;
`
export const LinkHover = styled.a`
  &:hover {
    color: ${blue[60]};
  }
`;

export const IconList = styled.a`
  display: inline-block;
  paddin-bottom: 5px;
  font-size: 40px;
  width: 40px;
  text-align: center;
  text-decoration: none;
  margin-right: 10px;
  &:hover {
    opacity: 0.7;
  }
`
