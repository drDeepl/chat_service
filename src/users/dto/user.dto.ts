import { ApiProperty } from '@nestjs/swagger';

export class UserDto {
  @ApiProperty({ nullable: false })
  username: string;
  @ApiProperty({ nullable: false })
  role: string;
  @ApiProperty({ nullable: false })
  profile_photo_id: number;
  @ApiProperty({ nullable: false })
  sex: string;
  @ApiProperty({ nullable: false })
  createdAt: number;
  @ApiProperty({ nullable: false })
  dateBirthday: number;
}
