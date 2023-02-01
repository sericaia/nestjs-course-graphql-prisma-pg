import { Injectable, Scope } from '@nestjs/common';
import { Flavor } from '@prisma/client';
import DataLoader from 'dataloader';
import { PrismaService } from 'src/providers/prisma/prisma.service';

// new instance for each request
// 1st param is the coffeeIdKey (string)
@Injectable({ scope: Scope.REQUEST })
export class FlavorsByCoffeeLoader extends DataLoader<string, Flavor[]> {
  constructor(private readonly prisma: PrismaService) {
    super((keys) => this.batchLoadFn(keys));
  }

  private async batchLoadFn(coffeeIds: readonly string[]): Promise<Flavor[][]> {
    const coffeesWithFlavors = await this.prisma.coffee.findMany({
      where: {
        id: {
          in: [...coffeeIds],
        },
      },
      select: {
        id: true,
        flavors: true,
      },
    });

    return coffeesWithFlavors.map((coffee) => coffee.flavors);
  }
}
