import styled from 'styled-components';

export const Container = styled.ul`
  display: flex;
  overflow-x: scroll;
  margin: 0;
  padding: 0;
  position: relative;

  & li {
    margin-right: 1rem;
  }
`;

export const Item = styled.li`
  list-style: none;
  min-width: 85%;
  display: inline-block;
`;

export const Anchor = styled.a`
  display: block;
  text-decoration: none;
  width: 100%;
`;