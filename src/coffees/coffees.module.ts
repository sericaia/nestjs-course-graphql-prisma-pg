import { Module } from '@nestjs/common';
import { PrismaModule } from 'src/providers/prisma/prisma.module';
import { CoffeesResolver } from './coffees.resolver';
import { CoffeesService } from './coffees.service';
import { CoffeeFlavorResolver } from './coffee-flavor.resolver';
import { CoffeesFlavorService } from './coffee-flavor.service';

@Module({
  imports: [PrismaModule],
  providers: [
    CoffeesResolver,
    CoffeesService,
    CoffeeFlavorResolver,
    CoffeesFlavorService,
  ],
})
export class CoffeesModule {}
