import { ObjectType } from '@nestjs/graphql';
import { Drink } from 'src/common/interfaces/drink.interface/drink.interface';

@ObjectType({ implements: Drink })
export class TeaDto implements Drink {
  name: string;
}
