import { MinLength } from 'class-validator';
import { InputType } from '@nestjs/graphql';

@InputType()
export class CreateCoffeeInput {
  @MinLength(3)
  name: string;
  brand: string;
  flavors: string[];
}
