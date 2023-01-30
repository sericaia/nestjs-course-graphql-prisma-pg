import { Field, ID, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class FlavorDto {
  id: string;
  name: string;
}

@ObjectType()
export class CoffeeDto {
  id: string;
  name: string;
  brand: string;
  flavors?: FlavorDto[];
}
