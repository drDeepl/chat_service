import { ApiProperty } from '@nestjs/swagger';

export class MemberAddedRoomDto {
  @ApiProperty({ nullable: false })
  id: number;
  @ApiProperty({ nullable: false })
  room_id: number;
  @ApiProperty({ nullable: false })
  user_id: number;
}
