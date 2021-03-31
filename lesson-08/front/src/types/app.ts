export declare namespace App {
  interface Token {
    accessToken: string;
    refreshToken: string;
  }

  interface TokenPayload {
    readonly id: number;
    readonly login: string;
    readonly exp: number;
    readonly iat: number;
  }
}
