## Home


```jsx
import styled from '@emotion/styled`

const RenderText = styled.p`
    font-size: 16px;
    color: blue;
    text-align: left;
`;

<RenderText>
Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloribus, enim similique delectus laboriosam ratione libero, laudantium, voluptatum fugit asperiores cumque quis sint cum vero minus aut dolore molestias repellat quae
</RenderText>

```

### Product

Prop | Type | Description
---|---|---
`id` | number | unique key for each Product Component
`imageSrc` | string | Url for Product Image
`title` | string | Name of product
`description` | string | Product description
`titleAlignment`| 'center' |  'left','right', 'center', 'justify'


### `ProductRow`
```.jsx
<ProductRow/>
```

```.jsx
<Box boxStyles={{color: 'blue', background: 'yellow'}} text='Yooo' />
```


```.jsx
<ProductCard></ProductCard>
```