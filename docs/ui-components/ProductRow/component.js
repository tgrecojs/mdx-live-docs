import styled from '@emotion/styled';
import ProductCard from '../ProductCard/component';

const products = [
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

const ProductRow = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
`;

const Products = ({ data = products }) => (
  <ProductRow>
    {data.map(x => (
      <ProductCard key={x.id} {...x} />
    ))}
  </ProductRow>
);

export default Products;
