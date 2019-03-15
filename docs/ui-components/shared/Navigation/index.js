/** @jsx jsx */
import { jsx, css } from '@emotion/core';

import Link from 'next/link';

const styledNavigation = css`
  display: flex;
  align-items: center;
  justify-content: space-around;
  background: #800040;
  img {
    max-width: 70px;
  }
  ul {
    width: 40%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    list-style-type: none;
  }
  li a {
    padding: 10px;
    background: #004080;
    margin: 0px 5px;
    border-radius: 5px;
    transition: all 0.82s ease-in-out;
    color: #fff;
  }
  li a:hover {
    transform: scale(1.4);
  }
`;

const links = [
  {
    id: 0,
    href: '/',
    to: '/',
    label: 'Home'
  },
  {
    id: 1,
    href: '/pricing',
    to: '/pricing',
    label: 'View Pricing'
  },
  {
    id: 2,
    href: '/contact',
    to: '/contact',
    label: 'Contact Us'
  }
];

const Navigation = ({ data = links }) => (
  <div css={css`
    ${styledNavigation}
  `}>
    <img src="./static/tg-logo.png" alt="" />
    <ul>
      {data.map(link => (
        <Link href={link.href} to={link.to}>
          <li>
            <a>{link.label}</a>
          </li>
        </Link>
      ))}
    </ul>
  </div>
);

export default Navigation;
