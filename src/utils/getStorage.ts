import { parseJwt } from "./jwtDecode";

export interface AuthenticatedUser {
  email: string;
  role: number;
  sub: string;
  name: string;
  iat: number;
  exp: number;
}
export const getStorage = (): AuthenticatedUser => {
  const userSaved: AuthenticatedUser = parseJwt(
    JSON.parse(localStorage.getItem("@management:logged")!).access_token
  );

  return {
    ...userSaved,
  };
};
