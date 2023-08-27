import { ApiProperty } from '@nestjs/swagger';

export class MessageCreateDto {
  @ApiProperty({ nullable: false })
  from: number;
  @ApiProperty({ nullable: false })
  to: number;
  @ApiProperty({ nullable: false })
  text: string;
}
