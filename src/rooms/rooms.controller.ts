import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Logger,
  Param,
  Post,
} from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { RoomDto } from './dto/room.dto';
import { RoomsService } from './rooms.service';
import { RoomT } from './types';
import { RoomCreatedDto } from './dto/room-created.dto';
import { AddMemberRoomDto } from './dto/add-member-room.dto';
import { MemberAddedRoomDto } from './dto/memer-added-room.dto';
import { RoomEntity } from './entities/room.entity';

@ApiTags('rooms')
@Controller('rooms')
export class RoomsController {
  private readonly logger = new Logger(RoomsController.name);
  constructor(private readonly roomsService: RoomsService) {}
  @HttpCode(HttpStatus.OK)
  @HttpCode(HttpStatus.FORBIDDEN)
  @Post('create')
  @ApiOperation({ summary: 'create room' })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Success',
    type: RoomCreatedDto,
  })
  @ApiResponse({ status: HttpStatus.BAD_REQUEST, description: 'Bad Request' })
  @ApiResponse({ status: HttpStatus.FORBIDDEN, description: 'Unauthorized' })
  async createRoom(@Body() dto: RoomDto): Promise<RoomT> {
    this.logger.debug('createRoom');
    return this.roomsService.createRoom(dto.title);
  }

  @HttpCode(HttpStatus.OK)
  @HttpCode(HttpStatus.FORBIDDEN)
  @Get('all')
  @ApiOperation({ summary: 'get all rooms' })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Success',
    type: RoomEntity,
  })
  @ApiResponse({ status: HttpStatus.BAD_REQUEST, description: 'Bad Request' })
  async getRooms(): Promise<RoomT[]> {
    this.logger.debug('getRooms');
    return this.roomsService.getRooms();
  }

  @HttpCode(HttpStatus.OK)
  @Post('add-member-room')
  @ApiOperation({ summary: 'added user in room' })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Success',
    type: MemberAddedRoomDto,
  })
  @ApiResponse({ status: HttpStatus.FORBIDDEN })
  async addMemberInRoom(@Body() dto: AddMemberRoomDto) {
    this.logger.debug('addMemberInRoom');
    return this.roomsService.addMemberInRoom(+dto.roomId, +dto.userId);
  }

  @ApiOperation({ summary: 'delete room' })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Success',
  })
  @ApiResponse({
    status: HttpStatus.FORBIDDEN,
    description: "if something don't work",
  })
  @ApiResponse({
    status: HttpStatus.NOT_FOUND,
    description: 'room id is not exists',
  })
  @Delete('room/:roomId')
  async deleteRoom(@Param('roomId') roomId: string) {
    this.logger.debug('deleteMemberRoom');
    return this.roomsService.deleteRoom(+roomId);
  }
}
