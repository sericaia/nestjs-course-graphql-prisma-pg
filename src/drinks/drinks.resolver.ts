import { Resolver, Query } from '@nestjs/graphql';
import { CoffeeDto } from 'src/coffees/dto/coffee.dto';
import { TeaDto } from 'src/coffees/dto/tea.dto';
import { Drink } from 'src/common/interfaces/drink.interface/drink.interface';

@Resolver('Drink')
export class DrinksResolver {
  @Query(() => [Drink], { name: 'drinks' })
  async findAll(): Promise<Drink[]> {
    const coffee = new CoffeeDto();
    coffee.id = '1';
    coffee.name = 'Colombia';
    coffee.brand = 'Black Crow Coffee';

    const tea = new TeaDto();
    tea.name = 'Lipton';
    return [tea, coffee];
  }
}
