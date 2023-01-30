import { Coffee, Flavor } from '@prisma/client';
import { CoffeeDto } from './coffee.dto';

export function mapToCoffeeDto(
  coffee: Coffee & {
    flavors?: Flavor[];
  },
): CoffeeDto {
  return {
    id: coffee.id,
    name: coffee.name,
    brand: coffee.brand,
    flavors: coffee.flavors,
  };
}
