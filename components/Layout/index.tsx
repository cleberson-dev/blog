import React, { ReactNode } from 'react';
import * as S from './styles';

import Header from '../Header';
import Footer from '../Footer';


interface Props {
  children: ReactNode;
}

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <div>
      <Header />
      <S.Children>{children}</S.Children>
      <Footer />
    </div>
  );
}

export default Layout;