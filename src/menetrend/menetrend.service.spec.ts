import { Test, TestingModule } from '@nestjs/testing';
import { MenetrendService } from './menetrend.service';

describe('MenetrendService', () => {
  let service: MenetrendService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MenetrendService],
    }).compile();

    service = module.get<MenetrendService>(MenetrendService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
