import { PrismaService } from '@/prisma/prisma.service';
import { Injectable } from '@nestjs/common';
import { Logger } from '@nestjs/common';
@Injectable()
export class MessagesService {
  private readonly logger = new Logger('MESSAGES.CONTROLLER');

  constructor(private prisma: PrismaService) {}
  msgSend(from: number, to: number, text: string) {
    this.logger.verbose('msgSend');
    this.prisma.message.create({
      data: { from_user_id: from, to_user_id: to, message_text: text },
    });
  }
}
