import { Module } from '@nestjs/common';
import { ChatController } from './chat.controller';
import { ChatService } from './chat.service';
import { MessagesService } from '@/messages/messages.service';
import { ChatGateway } from './chat.gateway';

@Module({
  providers: [MessagesService, ChatService, ChatGateway],
})
export class ChatModule {}
