import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

export const LinkButton = styled.a`
  border: 2px solid #FF1654;
  border-radius: 5px;
  text-decoration: none;
  padding: 1px 8px;
  width: fit-content;

  & > img {
    width: 10px;
  }
`; 

export const PrevLinkButton = styled(LinkButton)`
  & > img {
    transform: rotate(180deg);
  }
`;

export const NextLinkButton = styled(LinkButton)`
  
`;

export const Text = styled.p`
  font-size: 14px;
  font-weight: 800;
  color: #BAB5B5;
  margin: 0;
  text-align: right;
`;

export const NavButtons = styled.div`
  margin-bottom: 10px;

  & > a {
    margin-right: 5px;
  }
  & > a:last-child {
    margin-right: 0;
  }
`;