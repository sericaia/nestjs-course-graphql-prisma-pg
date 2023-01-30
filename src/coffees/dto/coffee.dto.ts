import { Field, ID, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class FlavorDto {
  @Field(() => String)
  id: string;
  @Field(() => String)
  name: string;
}

@ObjectType()
export class CoffeeDto {
  @Field(() => String)
  id: string;
  @Field(() => String)
  name: string;
  @Field(() => String)
  brand: string;

  @Field(() => [FlavorDto], { defaultValue: [] })
  flavors?: FlavorDto[];
  // flavors: string[];
}
