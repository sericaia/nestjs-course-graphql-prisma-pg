import { Field, ID, ObjectType } from '@nestjs/graphql';
import { Drink } from 'src/common/interfaces/drink.interface/drink.interface';

@ObjectType()
export class FlavorDto {
  id: string;
  name: string;
  createdAt?: Date;
  updatedAt?: Date;
}

@ObjectType({ implements: Drink })
export class CoffeeDto implements Drink {
  id: string;
  name: string;
  brand: string;
  flavors?: FlavorDto[];
  createdAt?: Date;
  updatedAt?: Date;
}
