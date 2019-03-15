/** @jsx jsx */
import { jsx, css } from '@emotion/core';

const flexCol = css`
    display: flex;
    flex-direction: column;
    width: 100vw;
`;


const globalStyles = css`
@import url('https://fonts.googleapis.com/css?family=Fira+Sans|Mukta');
body {
  margin: 0;
  padding: 0;
}
.site {
  display: flex;
  min-height: 100vh;
  width: 100vw;
  flex-direction: column;
  background: #404e88;
  color: #fff;
  font-family: 'Fira Sans', sans-serif;
}
footer,
h1,
h2,
h3,
h4 {
  font-family: 'Mukta', sans-serif;
}
.site-content {
  flex: 1;
}
`;


const styledNavigation = `
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


export {
  flexCol,
  styledNavigation,
  globalStyles
};

