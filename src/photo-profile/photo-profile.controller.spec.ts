import { Test, TestingModule } from '@nestjs/testing';
import { PhotoProfileController } from './photo-profile.controller';

describe('PhotoProfileController', () => {
  let controller: PhotoProfileController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PhotoProfileController],
    }).compile();

    controller = module.get<PhotoProfileController>(PhotoProfileController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
