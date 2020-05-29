
import styled from 'styled-components';
import { blue } from '@carbon/colors';

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  @media (max-width: 640px) {
    display: ${({ isHome }) => (!isHome ? 'none' : 'flex')};
    flex-direction: column;
  }
`;

export const Header = styled.div`
  display: flex;
  @media (max-width: 640px) {
    flex-direction: column;
  }
`;

export const Image = styled.img`
  width: 200px;
  margin-right: 1rem;
  border-radius: 2px;
  object-fit: cover;
`;

export const ViewResumeLink = styled.a`
  display: flex;
  text-decoration: none;
  padding: 0.75rem 1.5rem;
  font-weight: bold;
  font-size: 18px;
  align-items: center;
  // margin-top: 1rem;
  border: 2px solid  ${blue[50]};
  background-color: ${blue[10]};
  transition: background-color 250ms ease;
  &:hover {
    background-color: ${blue[50]};
  }
  svg {
    fill: black;
    margin-left: 15px;
  }

  @media (max-width: 640px) {
    margin-top: 1rem;
    font-size: 16px;
    padding: 0.5rem 1.0rem;
    width: 50%;
  }
`;

export const LinkHover = styled.a`
  &:hover {
    color: ${blue[60]};
  }

  @media (max-width: 640px) {
   display: none;
  }
`;