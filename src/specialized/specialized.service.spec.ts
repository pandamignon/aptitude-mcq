import { Test, TestingModule } from '@nestjs/testing';
import { SpecializedService } from './specialized.service';

describe('SpecializedService', () => {
  let service: SpecializedService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SpecializedService],
    }).compile();

    service = module.get<SpecializedService>(SpecializedService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
