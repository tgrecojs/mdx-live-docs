import React from 'react'
import App, { Container } from 'next/app'
import Head from 'next/head'
import {
  Layout,
  SideNav,
  Pagination
} from 'mdx-docs'
import components from '../src/components';

const docsTheme = {
  lineHeight: '1.5',
  font: "'Bitter', serif",
  colors: {
    text: 'blue',
    background: 'orange',
    link: '#07c'
  },
  LayoutSidebar: {
    backgroundColor: 'orange',
    paddingTop: '32px',
    paddingBottom: '32px'
  }
};

const baseUrls = {
  home: '/',
  components: '/components',
  devUrl: 'http://localhost:3000',
}

const routes = [
  { name: 'Home', path: '/' },
  { name: 'Components', path: '/components' },
  {name: 'ProductCard', path: '/components/ProductCard'},
  {name: 'ProductRow', path: `${baseUrls.components}/ProductRow`},
  {name: 'Table', path: `${baseUrls.components}/Table`},
  {name: 'Documentation Guide', path: '/help'},
  { name: 'Development Server', path: `${baseUrls.devUrl}` },
]

export default class MyApp extends App {
  static async getInitialProps ({ Component, router, ctx }) {
    let page = {}

    if (Component.getInitialProps) {
      page = await Component.getInitialProps(ctx)
    }

    return { page }
  }

  render () {
    const { Component, page } = this.props

    return (
      <Container>
        <Head>
          <title>MDX Docs</title>
        </Head>
        <Layout
          theme={docsTheme}
          components={components}
          routes={routes}
          {...this.props}>
          <Layout.MenuToggle />
          <Layout.Sidebar>
            <SideNav routes={routes} />
          </Layout.Sidebar>
          <Layout.Main>
            <Component {...page} />
            <Pagination routes={routes} />
          </Layout.Main>
        </Layout>
      </Container>
    )
  }
}
