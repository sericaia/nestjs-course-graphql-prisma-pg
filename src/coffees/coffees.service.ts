import { Prisma, Coffee } from '@prisma/client';
import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/providers/prisma/prisma.service';
import { CreateCoffeeInput } from './dto/create-coffee.input/create-coffee.input';

@Injectable()
export class CoffeesService {
  constructor(private readonly prisma: PrismaService) {}

  async findAll() {
    return this.prisma.coffee.findMany();
  }

  async findOne(id: number): Promise<Coffee | null> {
    return this.prisma.coffee.findFirst({ where: { id } });
  }

  async create(createCoffeeInput: CreateCoffeeInput) {
    return this.prisma.coffee.create({
      data: createCoffeeInput,
    });
  }
}
