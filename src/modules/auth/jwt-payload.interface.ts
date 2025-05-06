export interface JwtPayload {
  username: string;
  sub: number;
}
export interface AuthToken {
  accessToken: string;
  refreshToken: string;
}