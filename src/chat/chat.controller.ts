import { MessagesService } from '@/messages/messages.service';
import { Controller, Get, Logger, Res } from '@nestjs/common';

@Controller('chat')
export class ChatController {
  constructor(private msgService: MessagesService) {}

  private logger = new Logger(ChatController.name);
  @Get('/chat')
  async Chat(@Res() res) {
    this.logger.debug('chat');
    const messages = await this.msgService.getMessages();
    res.json(messages);
  }
}
