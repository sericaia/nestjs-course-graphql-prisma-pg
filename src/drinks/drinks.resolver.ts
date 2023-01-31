import { Resolver, Query } from '@nestjs/graphql';
import { CoffeeDto } from 'src/coffees/dto/coffee.dto';
import { TeaDto } from 'src/coffees/dto/tea.dto';
import { Drink } from 'src/common/interfaces/drink.interface/drink.interface';
import { DrinksResultUnion } from 'src/common/unions/drinks-result.union';

@Resolver('Drink')
export class DrinksResolver {
  @Query(() => [DrinksResultUnion], { name: 'drinks' })
  async findAll(): Promise<(typeof DrinksResultUnion)[]> {
    const coffee = new CoffeeDto();
    coffee.id = '1';
    coffee.name = 'Colombia';
    coffee.brand = 'Black Crow Coffee';

    const tea = new TeaDto();
    tea.name = 'Lipton';
    return [tea, coffee];
  }
}
