/** @jsxImportSource @emotion/react */

import { btn } from './Button.style.js';

const Button = (props) => {
  return <button css={btn}>{props.title}</button>;
};

export default Button;
