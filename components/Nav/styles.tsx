import styled from "styled-components";

export const Container = styled.button`
  position: relative;
  background: none;
  border: none;
  outline: none;
  width: fit-content;

  &:active img {
    opacity: 0.8;
  }

  & img {
    width: 1.5rem;
  }
`;

export const Box = styled.menu`
  position: absolute;
  margin: 0;
  padding: 0;
  top: 30px;
  left: 0;
  width: fit-content;
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.06), 0 1px 3px 0 rgba(0, 0, 0, 0.1);
`;

export const List = styled.ul`
  list-style: none;
  padding: 0 20px;
  text-align: left;
  width: 45vw;
`;

export const ListItem = styled.li`
  padding: 10px 0;
  font-family: 'Nunito', sans-serif;
  font-size: 0.9rem;
  & a {
    color: #606F7B;
    text-decoration: none;
  }
`;