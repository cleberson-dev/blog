import styled from 'styled-components';

export const Container = styled.ul`
  width: 100%;
  padding: 0;
  margin: 0;

  & li {
    border-bottom: 1px solid #DCDCDC;
  }

  & li:last-child {
    border-bottom: none;
  }
`;

export const Item = styled.li`
  width: 100%;
  padding: 20px 0;
  list-style: none;

  &:first-child {
    padding-top: 0;
  }
`;