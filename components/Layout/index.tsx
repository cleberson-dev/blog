import React, { ReactNode } from "react";
import Head from "next/head";
import * as S from "./styles";

import Header from "../Header";
import Footer from "../Footer";

interface Props {
  children: ReactNode;
  pageTitle?: string;
}

const Layout: React.FC<Props> = ({ children, pageTitle }) => {
  const websiteTitle = "cleberson.blog";

  return (
    <div>
      <Head>
        <title>
          {pageTitle && pageTitle !== ""
            ? pageTitle + " | " + websiteTitle
            : websiteTitle}
        </title>
      </Head>
      <Header />
      <S.Children>{children}</S.Children>
      <Footer />
    </div>
  );
};

export default Layout;
