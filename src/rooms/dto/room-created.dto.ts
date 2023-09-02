import { ApiProperty } from '@nestjs/swagger';

export class RoomCreatedDto {
  @ApiProperty({ nullable: false })
  id: number;
  @ApiProperty({ nullable: false })
  title: string;
}
