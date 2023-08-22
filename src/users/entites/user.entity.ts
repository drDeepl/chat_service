import { ApiProperty } from '@nestjs/swagger';

export class UserEntity {
  @ApiProperty({ nullable: false })
  id: number;
  @ApiProperty({ nullable: false })
  username: string;
  @ApiProperty({ nullable: false })
  role: string;
  @ApiProperty({ nullable: false })
  profile_photo_id: number;
  @ApiProperty({ nullable: false })
  sex: string;
  @ApiProperty({ nullable: false })
  createdAt: Date;
  @ApiProperty({ nullable: false })
  passwordHash: string;
  @ApiProperty({ nullable: false })
  refresh_hash: string;
  @ApiProperty({ nullable: false })
  dateBirthday: Date;

  constructor(
    username: string,
    passwordHash: string,
    createdAt: Date,
    sex: string,
    dateBirthday: Date,
    role: string = 'user',
    refresh_hash: string = '',
    profile_photo_id: number = null,
  ) {
    this.username = username;
    this.passwordHash = passwordHash;
    this.createdAt = createdAt;
    this.profile_photo_id = profile_photo_id;
    this.sex = sex;
    this.role = role;
    this.refresh_hash = refresh_hash;
    this.dateBirthday = dateBirthday;
  }
}
