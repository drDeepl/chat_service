import { Logger, OnModuleInit } from '@nestjs/common';
import {
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
  OnGatewayInit,
  OnGatewayConnection,
  OnGatewayDisconnect,
} from '@nestjs/websockets';
import { Socket, Server } from 'socket.io';
import { ChatEntity } from './entities/chat.entity';
import { MessagesService } from '@/messages/messages.service';

@WebSocketGateway({
  cors: {
    origin: '*',
  },
})
export class ChatGateway
  implements
    OnGatewayInit,
    OnGatewayConnection,
    OnGatewayDisconnect,
    OnModuleInit
{
  constructor(private msgService: MessagesService) {}
  private readonly logger = new Logger(ChatGateway.name);
  @WebSocketServer()
  server: Server;

  @SubscribeMessage('newMessage')
  async handleSendMessage(client: Socket, payload: any): Promise<void> {
    await this.msgService.createMessage(payload.from, payload.to, payload.text);
    console.log(payload);
    this.server.emit(payload.from, payload);
    this.server.emit(payload.to, payload);
  }

  onModuleInit() {
    this.server.on('connection', (socket) => {
      console.log(`${socket.id} is connected`);
    });
  }

  afterInit(server: Server) {
    console.log(server);
    this.logger.verbose('init after init');
    //Do stuffs
  }

  handleDisconnect(client: Socket) {
    console.log(`Disconnected: ${client.id}`);
    //Do stuffs
  }

  handleConnection(client: Socket, ...args: any[]) {
    console.log(`Connected ${client.id}`);

    //Do stuffs
  }
}
