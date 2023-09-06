import { CategoryItem } from './CategoryItem';
import { Container } from './styled';
import { categories } from '../../data';

export function Categories() {
  return (
    <Container>
      {!!categories &&
        categories.map(({ id, title, img }, idx) => (
          <CategoryItem key={id} title={title} img={img} />
        ))}
    </Container>
  );
}
