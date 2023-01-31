import { Field, ID, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class FlavorDto {
  id: string;
  name: string;
  createdAt?: Date;
  updatedAt?: Date;
}

@ObjectType()
export class CoffeeDto {
  id: string;
  name: string;
  brand: string;
  flavors?: FlavorDto[];
  createdAt?: Date;
  updatedAt?: Date;
}
