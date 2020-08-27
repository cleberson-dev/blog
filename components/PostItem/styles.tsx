import styled from 'styled-components';

export const Container = styled.div`
  font-weight: 800;
  display: flex;
`;

export const Cover = styled.figure<{ src: string }>`
  display: inline-block;
  width: 116px;
  height: 94px;
  border-radius: 10px;
  margin: 0;
  margin-right: 15px;
  background: url(${props => props.src});
  background-size: cover;
`;

export const Title = styled.a`
  text-decoration: none;
  color: #2F495E;
  font-size: 1rem;
  display: block;
`;

export const Category = styled.span`
  text-transform: uppercase;
  font-size: 0.8rem;
  color: #BAB5B5;
  margin-top: 5px;
`;