import { Module } from '@nestjs/common';
import { PhotoProfileController } from './photo-profile.controller';
import { PhotoProfileService } from './photo-profile.service';
import { PhotoProfileController } from './photo-profile.controller';

@Module({
  controllers: [PhotoProfileController],
  providers: [PhotoProfileService]
})
export class PhotoProfileModule {}
