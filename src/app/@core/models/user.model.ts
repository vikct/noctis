export class User {
  userId: number;
  username: string;
  password: string;
  displayName: string;
  role: string[];
  token?: string;
  expires?: string;
}
