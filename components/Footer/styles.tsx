import styled from 'styled-components';

export const Container = styled.footer`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #FFF8FA;
  padding: 20px 1rem;

  a {
    text-decoration: none;
    color: #2F495E;
  }
`;

export const SocialLinks = styled.address`
  font-style: normal;
  display: flex;
  flex-direction: column;
  text-align: right;
  font-weight: 600;
  text-transform: lowercase;

  a {
    margin: 2px 0;
  }

  a:hover {
    opacity: 0.8;
  }
`;

export const Websites = styled.div`
  ul {
    margin: 0;
    padding: 0;
    display: flex;
  }

  li, h1 {
    font-weight: 800;
  }

  h1 {
    margin: 0;
    font-size: 1.4rem;
  }

  li {
    list-style: none;
    margin-right: 5px;
    font-size: 1rem;
  }

  li.selected a {
    color: #FC5F89;
    opacity: 1;
  }

  li:hover a {
    opacity: 1;
  }

  a {
    color: #8F8F8F;
    opacity: 0.5;
    font-size: 18px;
  }
`;