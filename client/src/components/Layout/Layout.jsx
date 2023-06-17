/** @jsxImportSource @emotion/react */

import Footer from './Footer/Footer.jsx';
import Header from './Header/Header.jsx';
import { mainContainer } from './Layout.style.js';

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <main css={mainContainer}>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
