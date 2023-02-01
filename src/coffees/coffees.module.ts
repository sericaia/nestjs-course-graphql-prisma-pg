import { Module } from '@nestjs/common';
import { PrismaModule } from 'src/providers/prisma/prisma.module';
import { CoffeesResolver } from './coffees.resolver';
import { CoffeesService } from './coffees.service';
import { CoffeeFlavorResolver } from './coffee-flavor.resolver';
import { CoffeesFlavorService } from './coffee-flavor.service';
import { PubSubModule } from 'src/pub-sub/pub-sub.module';

@Module({
  imports: [PrismaModule, PubSubModule],
  providers: [
    CoffeesResolver,
    CoffeesService,
    CoffeeFlavorResolver,
    CoffeesFlavorService,
  ],
})
export class CoffeesModule {}
