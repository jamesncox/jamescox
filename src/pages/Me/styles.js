import styled from 'styled-components'

export const ProfileLink = styled.li`
  margin-right: 0.5rem;
  margin-bottom: 0.5rem;
  display: inline-block;
  font-size: 18px;
`
export const IconList = styled.a`
  display: inline-block;
  paddin-bottom: 5px;
  font-size: 50px;
  width: 45px;
  text-align: center;
  text-decoration: none;
  margin-right: 12px;
  &:hover {
    opacity: 0.7;
  }
  @media (max-width: 350px) {
    font-size: 40px;
    width: 40px;
    margin-right: 5px;
  }
`
