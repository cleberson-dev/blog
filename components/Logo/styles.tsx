import styled from 'styled-components';

interface ContainerProps {
  size: number;
}

export const Container = styled.div<ContainerProps>`
  font-size: calc(${props => props.size} * 1rem);
  font-weight: bold;
  text-transform: lowercase;
  color: #2F495E;
`;

export const Extension = styled.span`
  color: #FC5F89;
`;