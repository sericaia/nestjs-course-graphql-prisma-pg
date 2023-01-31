import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/providers/prisma/prisma.service';

@Injectable()
export class CoffeesFlavorService {
  constructor(private readonly prisma: PrismaService) {}

  async findAllFlavorForCoffee(id: string) {
    return this.prisma.flavor.findMany({
      where: {
        coffeeId: id,
      },
    });
  }
}
