export interface User {
  _id?: string,
  user_id: string,
  username: string,
  password: string,
  user_created: Date,
  session_id: string,
  session_start: Date,
  session_last_touch: Date,
  last_login: Date
};