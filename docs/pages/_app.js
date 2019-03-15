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
  font: 'Georgia, serif',
  lineHeight: '1.5',
  colors: {
    text: '#111',
    background: 'orange',
    link: '#07c'
  },
  LayoutSidebar: {
    backgroundColor: 'orange',
    paddingTop: '32px',
    paddingBottom: '32px'
  }
};

const routes = [
  { name: 'MDX Docs', path: '/' },
  { name: 'Theming', path: '/theming' },
  { name: 'Components', path: '/components' },
  {name: 'home', path: '/ui/home'},
  { name: 'Custom Setup', path: '/custom-setup' },
  { name: 'Migrating from x0', path: '/migrating-from-x0' },
  { name: 'GitHub', path: 'https://github.com/jxnblk/mdx-docs' },
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
