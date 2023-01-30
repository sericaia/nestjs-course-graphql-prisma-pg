import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/providers/prisma/prisma.service';
import { CreateCoffeeInput } from './dto/create-coffee.input';
import { mapToCoffeeDto } from './dto/coffee.mapper';
import { CoffeeDto } from './dto/coffee.dto';

@Injectable()
export class CoffeesService {
  constructor(private readonly prisma: PrismaService) {}

  async findAll(): Promise<CoffeeDto[] | null> {
    const coffee = await this.prisma.coffee.findMany({
      include: {
        flavors: true,
      },
    });

    return coffee.map(mapToCoffeeDto);
  }

  async findOne(id: string): Promise<CoffeeDto | null> {
    const coffee = await this.prisma.coffee.findUnique({
      where: {
        id,
      },
      include: {
        flavors: true,
      },
    });

    return mapToCoffeeDto(coffee);
  }

  async create({
    name,
    brand,
    flavors,
  }: CreateCoffeeInput): Promise<CoffeeDto> {
    const coffee = await this.prisma.coffee.create({
      data: {
        name,
        brand,
        flavors: {
          createMany: {
            data: flavors.map((el) => ({
              name: el,
            })),
          },
        },
      },
    });

    return mapToCoffeeDto(coffee);
  }
}
