import { Test, TestingModule } from '@nestjs/testing';
import { CatAlgorythmService } from './cat-algorythm.service';

describe('CatAlgorythmService', () => {
  let service: CatAlgorythmService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CatAlgorythmService],
    }).compile();

    service = module.get<CatAlgorythmService>(CatAlgorythmService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
