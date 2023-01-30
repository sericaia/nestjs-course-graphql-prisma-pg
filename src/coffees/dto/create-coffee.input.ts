import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CreateCoffeeInput {
  // @Field(() => String)
  name: string;
  // @Field(() => String)
  brand: string;
  // @Field(() => [String])
  flavors: string[];
}
