import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/providers/prisma/prisma.service';
import { CreateCoffeeInput } from './dto/create-coffee.input';
import { mapToCoffeeDto } from './dto/coffee.mapper';
import { CoffeeDto } from './dto/coffee.dto';
import { UpdateCoffeeInput } from './dto/update-coffee.input';
import { PubSub } from 'graphql-subscriptions';

@Injectable()
export class CoffeesService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly pubSub: PubSub,
  ) {}

  async findAll(): Promise<CoffeeDto[] | null> {
    const coffee = await this.prisma.coffee.findMany();

    return coffee.map(mapToCoffeeDto);
  }

  async findOne(id: string): Promise<CoffeeDto | null> {
    const coffee = await this.prisma.coffee.findUnique({
      where: {
        id,
      },
    });

    return coffee ? mapToCoffeeDto(coffee) : null;
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

    const coffeeDto = mapToCoffeeDto(coffee);
    this.pubSub.publish('newCoffee', { newCoffee: coffeeDto });

    return coffeeDto;
  }

  async update(
    id: string,
    updateCoffeeInput: UpdateCoffeeInput,
  ): Promise<CoffeeDto> {
    const coffee = await this.prisma.coffee.update({
      where: {
        id,
      },
      data: {
        name: updateCoffeeInput.name,
        brand: updateCoffeeInput.brand,
        // flavors: {
        //   updateMany: {
        //     where: {
        //       coffeeId: id,
        //     },
        //     data: updateCoffeeInput.flavors.map((el) => ({
        //       name: el,
        //     })),
        //   },
        // },
      },
    });
    return coffee ? mapToCoffeeDto(coffee) : null;
  }

  async delete(id: string): Promise<CoffeeDto> {
    return this.prisma.coffee.delete({
      where: {
        id,
      },
    });
  }
}
