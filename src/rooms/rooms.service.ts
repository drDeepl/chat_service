import { PrismaService } from '@/prisma/prisma.service';
import {
  ForbiddenException,
  HttpCode,
  HttpStatus,
  Injectable,
  Logger,
  NotFoundException,
} from '@nestjs/common';
import { RoomT } from './types';

@Injectable()
export class RoomsService {
  private readonly logger = new Logger(RoomsService.name);
  constructor(private prisma: PrismaService) {}
  async createRoom(title: string): Promise<RoomT> {
    this.logger.debug('createRoom');
    const rooms: RoomT[] = await this.prisma.room.findMany({
      where: {
        title: title,
      },
    });
    if (rooms.length < 1) {
      return this.prisma.room.create({
        data: {
          title: title,
        },
      });
    } else {
      throw new ForbiddenException('Комната с таким названием уже существует');
    }
  }

  async getRooms(): Promise<RoomT[]> {
    this.logger.debug('getRooms');
    return this.prisma.room.findMany();
  }

  async addMemberInRoom(roomId: number, userId: number) {
    this.logger.debug('addMemberInRomm');
    return this.prisma.membersRoom.create({
      data: {
        room_id: roomId,
        user_id: userId,
      },
    });
  }

  async deleteRoom(roomId: number) {
    this.logger.debug('deleteMemeberFromRoom');
    try {
      return await this.prisma.room.delete({
        where: {
          id: roomId,
        },
      });
    } catch (e) {
      if (e.code == 'P2025') {
        throw new NotFoundException('комната не найдена');
      } else {
        console.log(e);

        throw new ForbiddenException('что-то пошло не так');
      }
    }
  }
}
