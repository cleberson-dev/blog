import styled from 'styled-components';
import Link from 'next/link';

export const Container = styled.header`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr;
  padding: 0 20px;
  box-sizing: border-box;
`;

export const StyledLink = styled(Link)`
  display: flex;
  justify-content: center;
  text-decoration: none;
`;