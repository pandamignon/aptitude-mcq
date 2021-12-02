import { Test, TestingModule } from '@nestjs/testing';
import { CreatequizController } from './createquiz.controller';

describe('CreatequizController', () => {
  let controller: CreatequizController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CreatequizController],
    }).compile();

    controller = module.get<CreatequizController>(CreatequizController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
