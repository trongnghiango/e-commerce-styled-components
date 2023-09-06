import { popularProducts } from '../../data';
import { Product } from './Product';
import { Container } from './styled';

export const Products = () => {
  return (
    <Container>
      {!!popularProducts &&
        popularProducts.map((item, idx) => <Product item={item} />)}
    </Container>
  );
};
