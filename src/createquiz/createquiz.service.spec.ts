import { Test, TestingModule } from '@nestjs/testing';
import { CreatequizService } from './createquiz.service';

describe('CreatequizService', () => {
  let service: CreatequizService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CreatequizService],
    }).compile();

    service = module.get<CreatequizService>(CreatequizService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
