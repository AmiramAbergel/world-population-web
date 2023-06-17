import { css } from '@emotion/react';

export const headerContainer = css`
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: #4caf50;
  padding: 10px;
`;

export const navbar = css`
  display: flex;
`;

export const navList = css`
  display: flex;
  flex-direction: row;
  list-style: none;
  li {
    margin: 10px;
    padding: 10px;
    color: white;
  }
`;
