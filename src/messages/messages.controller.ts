import {
  Controller,
  Post,
  Body,
  HttpStatus,
  HttpCode,
  UseGuards,
  Req,
  Logger,
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
import { MessageSendDto } from './dto/message-send.dto';
@ApiTags('messages')
@Controller('messages')
export class MessagesController {
  private readonly logger = new Logger('MESSAGES.CONTROLLER');
  constructor(private readonly msgService: MessagesService) {}

  @HttpCode(HttpStatus.OK)
  @Post('signin')
  @ApiOperation({ summary: 'response to validate data for sign in' })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Success',
    type: MessageSendDto,
  })
  @ApiResponse({ status: HttpStatus.BAD_REQUEST, description: 'Bad Request' })
  @ApiResponse({ status: HttpStatus.UNAUTHORIZED, description: 'Unauthorized' })
  sendMsg(@Body() dto: MessageSendDto) {
    this.logger.verbose('sendMsg');
    this.msgService.msgSend(dto.from, dto.to, dto.text);
  }
}
