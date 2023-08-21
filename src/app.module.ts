import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MessagesModule } from './messages/messages.module';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { PhotoProfileModule } from './photo-profile/photo-profile.module';

@Module({
  imports: [MessagesModule, AuthModule, UsersModule, PhotoProfileModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
