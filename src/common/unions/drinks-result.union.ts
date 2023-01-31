import { createUnionType } from '@nestjs/graphql';
import { CoffeeDto } from 'src/coffees/dto/coffee.dto';
import { TeaDto } from 'src/coffees/dto/tea.dto';

export const DrinksResultUnion = createUnionType({
  name: 'DrinksResult',
  types: () => [CoffeeDto, TeaDto],
});
