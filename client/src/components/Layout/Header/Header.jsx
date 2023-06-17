/** @jsxImportSource @emotion/react */

import { headerContainer, navList, navbar } from './Header.style.js';

const Header = () => {
  return (
    <header css={headerContainer}>
      <div>
        <h1>Logo</h1>
      </div>
      <nav css={navbar}>
        <ul css={navList}>
          <li>World Population</li>
          <li>About</li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
