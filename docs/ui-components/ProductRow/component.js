/** @jsx jsx */
import {css, jsx} from '@emotion/core';
import ProductCard from '../ProductCard/component';

export const products = [
  {
    id: 0,
    imageSrc: 'https://via.placeholder.com/350x250/c27e33/ffffff?Product=One',
    title: 'Sample Product One'
  },
  {
    id: 1,
    imageSrc: 'https://via.placeholder.com/350x250/7e33c2/ffffff?Product=Two',
    title: 'Sample Product Two'
  },
  {
    id: 2,
    imageSrc: 'https://via.placeholder.com/350x250/33c27e/ffffff?Product=Three',
    title: 'Sample Product Three'
  },
  {
    id: 3,
    imageSrc: 'https://via.placeholder.com/350x250/3377c2/ffffff?Product=Four',
    title: 'Sample Product Four'
  },
  {
    id: 4,
    imageSrc: 'https://via.placeholder.com/350x250/77c233/ffffff?Product=Five',
    title: 'Sample Product Five'
  }
];

const styles = {
  display: 'flex',
  justifyContent: 'space-between',
  flexWrap: 'wrap'
};

const Products = ({ rowStyles = styles, data = products }) => (
  <div css={css`
      ${rowStyles}
  `}>
    {data.map(x => (
      <ProductCard key={x.id} {...x} />
    ))}
  </div>
);

export default Products;
