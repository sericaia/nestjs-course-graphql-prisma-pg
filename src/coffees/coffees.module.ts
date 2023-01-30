import { Module } from '@nestjs/common';
import { PrismaModule } from 'src/providers/prisma/prisma.module';
import { CoffeesResolver } from './coffees.resolver';
import { CoffeesService } from './coffees.service';

@Module({
  imports: [PrismaModule],
  providers: [CoffeesResolver, CoffeesService],
})
export class CoffeesModule {}
