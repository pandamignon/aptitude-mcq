import { Test, TestingModule } from '@nestjs/testing';
import { SpecializedController } from './specialized.controller';

describe('SpecializedController', () => {
  let controller: SpecializedController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SpecializedController],
    }).compile();

    controller = module.get<SpecializedController>(SpecializedController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
