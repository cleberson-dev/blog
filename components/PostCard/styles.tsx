import styled from 'styled-components';

interface ContainerProps {
  cover: string;
  dark: boolean;
}

export const Container = styled.div<ContainerProps>`
  width: 100%;
  height: 376px;
  box-shadow: 3px 4px 8px 0 rgba(0, 0, 0, .25);
  background: url(${props => props.cover});
  background-size: cover;
  background-position: center;
  border-radius: 18px;
  font-weight: 800;
  color: ${props => props.dark ? 'black' : 'white'};
  box-sizing: border-box;
  padding-top: 20px;
  padding-left: 17px;
`;

export const Category = styled.p`
  text-transform: uppercase;
  font-size: 0.9rem;
  opacity: 0.7;
  margin: 0;
`;

export const Title = styled.p`
  font-size: 1.4rem;
  margin-top: 5px;
`;