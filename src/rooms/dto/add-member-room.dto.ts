import { ApiProperty } from '@nestjs/swagger';

export class AddMemberRoomDto {
  @ApiProperty({ nullable: false })
  roomId: number;
  @ApiProperty({ nullable: false })
  userId: number;
}
