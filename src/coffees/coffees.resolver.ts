import { Mutation, Query, Subscription } from '@nestjs/graphql';
import { Args, Resolver } from '@nestjs/graphql';
import { CoffeesService } from './coffees.service';
import { CreateCoffeeInput } from './dto/create-coffee.input';
import { CoffeeDto } from './dto/coffee.dto';
import { UpdateCoffeeInput } from './dto/update-coffee.input';
import { PubSub } from 'graphql-subscriptions';

@Resolver()
export class CoffeesResolver {
  constructor(
    private readonly coffeesService: CoffeesService,
    private readonly pubSub: PubSub,
  ) {}

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

  @Mutation(() => CoffeeDto, { name: 'updateCoffee', nullable: true })
  async update(
    @Args('id', { type: () => String }) id: string,
    @Args('updateCoffeeInput') updateCoffeeInput: UpdateCoffeeInput,
  ) {
    return this.coffeesService.update(id, updateCoffeeInput);
  }

  @Mutation(() => CoffeeDto, { name: 'deleteCoffee', nullable: true })
  async delete(@Args('id', { type: () => String }) id: string) {
    return this.coffeesService.delete(id);
  }

  @Subscription(() => CoffeeDto)
  newCoffee() {
    return this.pubSub.asyncIterator('newCoffee');
  }
}
