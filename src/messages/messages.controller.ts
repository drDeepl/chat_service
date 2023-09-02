import {
  Controller,
  Post,
  Body,
  HttpStatus,
  HttpCode,
  UseGuards,
  Req,
  Logger,
  Get,
  Res,
  Param,
} from '@nestjs/common';

import {
  ApiOperation,
  ApiParam,
  ApiQuery,
  ApiResponse,
  ApiSecurity,
  ApiTags,
} from '@nestjs/swagger';

import { MessagesService } from './messages.service';
import { MessageCreateDto } from './dto/message-send.dto';
@ApiTags('messages')
@Controller('messages')
export class MessagesController {
  private readonly logger = new Logger('MESSAGES.CONTROLLER');
  constructor(private readonly msgService: MessagesService) {}

  @HttpCode(HttpStatus.OK)
  @Post('create')
  @ApiOperation({ summary: 'response to validate data for sign in' })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Success',
    type: MessageCreateDto,
  })
  @ApiResponse({ status: HttpStatus.BAD_REQUEST, description: 'Bad Request' })
  @ApiResponse({ status: HttpStatus.UNAUTHORIZED, description: 'Unauthorized' })
  createMessage(@Body() dto: MessageCreateDto) {
    this.logger.debug('sendMsg');
    this.msgService.createMessage(dto.from, dto.to, dto.text);
  }

  @HttpCode(HttpStatus.OK)
  @Get(':from/:to')
  @ApiOperation({ summary: 'response to validate data for sign in' })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Success',
    type: MessageCreateDto,
  })
  @ApiResponse({ status: HttpStatus.BAD_REQUEST, description: 'Bad Request' })
  @ApiResponse({ status: HttpStatus.UNAUTHORIZED, description: 'Unauthorized' })
  getMsgFromTo(@Param() params: any) {
    this.logger.debug('getMsgFromTo');
    this.msgService.getMsgFromTo(+params.from, +params.to);
  }

  @HttpCode(HttpStatus.OK)
  @Post('send')
  @ApiOperation({ summary: 'response to validate data for sign in' })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Success',
    type: MessageCreateDto,
  })
  @ApiResponse({ status: HttpStatus.BAD_REQUEST, description: 'Bad Request' })
  @ApiResponse({ status: HttpStatus.UNAUTHORIZED, description: 'Unauthorized' })
  sendMsg(@Body('from') dto: MessageCreateDto) {
    this.logger.debug('sendMsg');
    this.msgService.sendMsg(+dto.from, +dto.to, dto.text);
  }
}
