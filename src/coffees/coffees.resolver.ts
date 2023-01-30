import { ParseIntPipe } from '@nestjs/common';
import { ID, Mutation, Query } from '@nestjs/graphql';
import { Args, Resolver } from '@nestjs/graphql';
import { CoffeesService } from './coffees.service';
import { CreateCoffeeInput } from './dto/create-coffee.input';
import { CoffeeDto } from './dto/coffee.dto';

@Resolver()
export class CoffeesResolver {
  constructor(private readonly coffeesService: CoffeesService) {}

  @Query(() => [CoffeeDto], { name: 'coffees' })
  async findAll() {
    return this.coffeesService.findAll();
  }

  @Query(() => CoffeeDto, { name: 'coffee', nullable: true })
  async findOne(@Args('id', { type: () => String }) id: string) {
    return this.coffeesService.findOne(id);
  }

  @Mutation(() => CoffeeDto, { name: 'createCoffee', nullable: true })
  async create(
    @Args('createCoffeeInput') createCoffeeInput: CreateCoffeeInput,
  ) {
    return this.coffeesService.create(createCoffeeInput);
  }
}
