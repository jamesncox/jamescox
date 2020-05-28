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