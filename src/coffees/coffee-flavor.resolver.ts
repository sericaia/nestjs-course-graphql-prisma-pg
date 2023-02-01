import { Parent, ResolveField, Resolver } from '@nestjs/graphql';
import { FlavorsByCoffeeLoader } from './data-loader/flavors-by-coffee.loader';
import { CoffeeDto, FlavorDto } from './dto/coffee.dto';

@Resolver(() => CoffeeDto)
export class CoffeeFlavorResolver {
  constructor(private readonly flavorsByCoffeeLoader: FlavorsByCoffeeLoader) {}

  @ResolveField('flavors', () => [FlavorDto])
  async getFlavorsOfCoffee(@Parent() coffee: CoffeeDto) {
    return this.flavorsByCoffeeLoader.load(coffee.id);
  }
}
