import React from "react";
import Link from 'next/link';
import * as S from "./styles";
import socials from '../../socials.json';

const Footer: React.FC = () => {
  return (
    <S.Container>
      <S.Websites>
        <h1>cleberson</h1>
        <ul>
          <li className="selected">
            <Link href="/">.blog</Link>
          </li>
          <li>
            <a href="https://clebersondev.netlify.app">.dev</a>
          </li>
        </ul>
      </S.Websites>
      <S.SocialLinks>
        <a href={socials.github.link}>{socials.github.title}</a>
        <a href={socials.twitter.link}>{socials.twitter.title}</a>
        <a href={socials.linkedin.link}>{socials.linkedin.title}</a>
      </S.SocialLinks>
    </S.Container>
  );
};

export default Footer;
