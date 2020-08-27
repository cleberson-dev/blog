import styled from 'styled-components';

export const Container = styled.article`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin: 20px 0;
`;

export const Category = styled.div`
  color: #2F495E;
  background-color: #EDF2F7;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.06), 0 1px 3px 0 rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  text-transform: uppercase;
  width: fit-content;
  padding: 8px 15px;
  font-size: 0.85rem;
  font-weight: 700;
  align-self: center;
`;

export const Cover = styled.figure<{ src: string }>`
  margin: 0;
  margin-top: 10px;
  width: 100%;
  height: calc(100vw * 0.72);
  background: url(${props => props.src});
  background-position: center;
  background-size: cover;
`;

export const Title = styled.h1`
  font-weight: 800;
  font-size: 1.5rem;
  margin-top: 20px;
  margin-bottom: 10px;
`;

export const Date = styled.time`
  color: #8B8B8B;
  font-size: 0.8rem;
  font-weight: 600;
  display: flex;
  align-items: center;

  & img { 
    width: 1rem;
    margin-right: 6px; 
  }
`;

export const Content = styled.div`
  margin-top: 15px;

  & p {
    font-size: 0.9rem;
    margin: 0;
  }

  & a {
    color: #FC5F89;
    text-decoration: none;
  }

  & h2 {
    font-size: 1.4rem;
    font-weight: 800;
    margin-top: 20px;
    margin-bottom: 5px;
  }

  & h3 {
    font-size: 1.3rem;
    font-weight: 700;
    margin-top: 20px;
    margin-bottom: 5px;
  }

  & figure {
    margin: 20px 0;
    width: 100%;
  }

  & figure img {
    width: 100%;
  }

  & figure figcaption {
    text-align: center;
    width: 100%;
    color: #8B8B8B;
    font-size: 0.8rem;
    margin-top: 5px;
  }
`;