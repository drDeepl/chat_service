import { ApiProperty } from '@nestjs/swagger';

export class RoomDto {
  @ApiProperty({ nullable: false })
  title: string;
}
