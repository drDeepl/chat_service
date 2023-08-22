import { Module } from '@nestjs/common';
import { PhotoProfileController } from './photo-profile.controller';
import { PhotoProfileService } from './photo-profile.service';

@Module({
  controllers: [PhotoProfileController],
  providers: [PhotoProfileService],
})
export class PhotoProfileModule {}
