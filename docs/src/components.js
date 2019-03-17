import React from 'react'
import styled from '@emotion/styled'
import Link from 'next/link'
import ProductRow, {products} from '../ui-components/ProductRow/component';
import ProductCard from '../ui-components/ProductCard/component';

const css = key => props => props.theme[key]

const a = ({ href, ...props }) =>
  <Link href={href}>
    <a {...props} />
  </Link>

// add these to mdx-docs default components
const h1 = styled.h1([], css('h1'))
const h2 = styled.h2([], css('h2'))
const h3 = styled.h3([], css('h3'))
const h4 = styled.h4([], css('h4'))
const h5 = styled.h5([], css('h5'))
const h6 = styled.h6([], css('h6'))
const p = styled.p([], css('p'))
const table = styled.table([], css('table'));

const td = styled.td`
  padding: 10px;
`;

export default {
  ProductRow,
  a,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  table,
  td,
  Box: props => 
  <div style={props.boxStyles}>
    <h2>{props.text}</h2>
    {props.children}
  </div>,
  ProductCard
}
