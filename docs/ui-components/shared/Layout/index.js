import Navigation from '../Navigation';
import Footer from '../Footer';
import { Global, css } from '@emotion/core';

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

const Layout = ({ children }) => (
  <div className="site">
    <Global
      styles={css`
          ${globalStyles}
      `}
    />
    <Navigation />
    <div className="site-content">{children}</div>
    <Footer />
  </div>
);

export default Layout;
