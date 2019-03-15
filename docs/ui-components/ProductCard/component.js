import styled from '@emotion/styled';

const ProductWrapper = styled.div`
  box-shadow: 0 0 16px rgba(0, 0, 0, 0.25);
  max-width: 256px;
  background: #fff;
  border: 2px solid #e9f7f9;
  border-radius: 3px;
  color: #404e88;
  margin: 10px;
`;

const ProductText = styled.p`
  padding: 0px 10px 0px 10px;
  font-size: 14px;
`;

const ProductHeading = styled.h2`
  font-size: 15px;
  text-align: center;
`;

const sampleDescription =
  'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloribus, enim similique delectus laboriosam ratione libero, laudantium, voluptatum fugit asperiores cumque quis sint cum vero minus aut dolore molestias repellat quae!';

const ProductImage = styled.img`
  max-width: 256px;
`;

const Product = ({
  id = 0,
  imageSrc = '',
  title = 'Sample Title',
  titleAlignment = 'center',
  description = sampleDescription
}) => (
  <ProductWrapper>
    <ProductImage src={imageSrc} />
    <div>
      <ProductHeading style={{ textAlign: titleAlignment }}>{title}</ProductHeading>
      <ProductText>{description}</ProductText>
    </div>
  </ProductWrapper>
);

export default Product;
