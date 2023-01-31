import { InterfaceType } from '@nestjs/graphql';

@InterfaceType()
export abstract class Drink {
  name: string;
}
