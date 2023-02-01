import { Module } from '@nestjs/common';
import { PrismaModule } from 'src/providers/prisma/prisma.module';
import { CoffeesResolver } from './coffees.resolver';
import { CoffeesService } from './coffees.service';
import { CoffeeFlavorResolver } from './coffee-flavor.resolver';
import { PubSubModule } from 'src/pub-sub/pub-sub.module';
import { FlavorsByCoffeeLoader } from './data-loader/flavors-by-coffee.loader';

@Module({
  imports: [PrismaModule, PubSubModule],
  providers: [
    CoffeesResolver,
    CoffeesService,
    CoffeeFlavorResolver,
    FlavorsByCoffeeLoader,
  ],
})
export class CoffeesModule {}
