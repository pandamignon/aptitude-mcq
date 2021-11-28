import { Test, TestingModule } from '@nestjs/testing';
import { CatAlgorythmController } from './cat-algorythm.controller';

describe('CatAlgorythmController', () => {
  let controller: CatAlgorythmController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CatAlgorythmController],
    }).compile();

    controller = module.get<CatAlgorythmController>(CatAlgorythmController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
