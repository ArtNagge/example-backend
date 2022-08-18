export interface JwtPayload {
  sub: string;
  iat?: number;
  exp?: number;
  jti?: string;
  login: string;
}