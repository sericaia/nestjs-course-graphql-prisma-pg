import { Test, TestingModule } from '@nestjs/testing';
import { CoffeeFlavorResolver } from './coffee-flavor.resolver';

describe('CoffeeFlavorResolver', () => {
  let resolver: CoffeeFlavorResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CoffeeFlavorResolver],
    }).compile();

    resolver = module.get<CoffeeFlavorResolver>(CoffeeFlavorResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
