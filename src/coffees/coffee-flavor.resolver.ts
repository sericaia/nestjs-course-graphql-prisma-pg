import { Parent, ResolveField, Resolver } from '@nestjs/graphql';
import { CoffeesFlavorService } from './coffee-flavor.service';
import { CoffeeDto, FlavorDto } from './dto/coffee.dto';

@Resolver(() => CoffeeDto)
export class CoffeeFlavorResolver {
  constructor(private readonly coffeesFlavorService: CoffeesFlavorService) {}

  @ResolveField('flavors', () => [FlavorDto])
  async getFlavorsOfCoffee(@Parent() coffee: CoffeeDto) {
    return this.coffeesFlavorService.findAllFlavorForCoffee(coffee.id);
  }
}
