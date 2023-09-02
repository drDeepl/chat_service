import { PrismaService } from '@/prisma/prisma.service';
import { Injectable } from '@nestjs/common';
import { Logger } from '@nestjs/common';
import { MessageEntity } from './entites/message.entity';
@Injectable()
export class MessagesService {
  private readonly logger = new Logger(MessagesService.name);

  constructor(private prisma: PrismaService) {}
  createMessage(from: number, to: number, text: string) {
    this.logger.verbose('msgSend');
    return this.prisma.message.create({
      data: { from_user_id: from, to_user_id: to, message_text: text },
    });
  }

  async getMessages(): Promise<MessageEntity[]> {
    this.logger.debug('getMessages');
    return await this.prisma.message.findMany();
  }
  async getMsgFromTo(from: number, to: number) {
    this.logger.debug('getMsgFromTo');
    return await this.prisma.message.findMany({
      where: {
        from_user_id: from,
        to_user_id: to,
      },
    });
  }

  async getUserDialogs(from: number) {
    this.logger.debug('getUserDialogs');
    await this.prisma.message.findMany({
      select: { to_user_id: true },
      where: { from_user_id: from },
    });
  }
  async sendMsg(from: number, to: number, text: string) {
    this.logger.debug('sendMsg');
    return this.prisma.message.create({
      data: { from_user_id: from, to_user_id: to, message_text: text },
    });
  }
}
