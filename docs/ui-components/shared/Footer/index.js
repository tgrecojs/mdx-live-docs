/** @jsx jsx */
import { jsx, css } from '@emotion/core';

const Footer = ({ title = 'Created with love' }) => (
  <footer
    css={css`
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      background: teal;
      justify-content: center;
    `}
  >
    <h4>{title}</h4>
    <h6>Copyright 2019</h6>
  </footer>
);
export default Footer;
