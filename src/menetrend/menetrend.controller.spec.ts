import { Test, TestingModule } from '@nestjs/testing';
import { MenetrendController } from './menetrend.controller';
import { MenetrendService } from './menetrend.service';

describe('MenetrendController', () => {
  let controller: MenetrendController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MenetrendController],
      providers: [MenetrendService],
    }).compile();

    controller = module.get<MenetrendController>(MenetrendController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
