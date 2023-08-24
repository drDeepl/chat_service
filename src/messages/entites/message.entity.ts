export class MessageEntity {
  id: number;
  from_user_id: number;
  to_user_id: number;
  message_text: string;
  send_datetime: Date;
  is_read: boolean;
}
