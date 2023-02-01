import { Field, ID, ObjectType } from '@nestjs/graphql';
import { Drink } from 'src/common/interfaces/drink.interface/drink.interface';
import { loggerMiddleware } from 'src/common/middleware/logger.middleware';

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

  @Field({ middleware: [loggerMiddleware] })
  name: string;

  brand: string;
  flavors?: FlavorDto[];
  createdAt?: Date;
  updatedAt?: Date;
}
