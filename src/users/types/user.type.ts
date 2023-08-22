export type User = {
  id: number;
  username: string;
  role: string;
  profile_photo_id: number;
  sex: string;
  createdAt: Date;
  passwordHash: string;
  refrash_hash: string;
  dateBirthday: Date;
};
