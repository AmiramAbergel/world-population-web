/** @jsxImportSource @emotion/react */

import Button from '../../UI/Button/Button.jsx';
import { continentsContainer, continentsNavList } from './WorldNav.style.js';

const DUMMY_CONTINENTS = [
  'Africa',
  'Europe',
  'Asia',
  'North America',
  'South America',
  'Oceania',
  'Antartica',
];

const WorldNav = () => {
  return (
    <nav css={continentsContainer}>
      <ul css={continentsNavList}>
        {DUMMY_CONTINENTS.map((continent, i) => (
          <li key={i}>
            <Button title={continent}></Button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default WorldNav;
