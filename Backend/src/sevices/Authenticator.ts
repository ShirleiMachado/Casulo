import * as jwt from "jsonwebtoken";

interface AuthenticationData {
  id: string;
  role?: string;
}
export default class Authenticator {
  private static EXPIRES_IN = "60min";

  public generateToken = (input: AuthenticationData, expiresIn: string = Authenticator.EXPIRES_IN): string => {
    const token = jwt.sign(
      {
        id: input.id,
        role: input.role
      },
      process.env.JWT_KEY as string,
      {
        expiresIn,
      }
    );

    return token;
  };

  public getData = (token: string): AuthenticationData => {
    const payload = jwt.verify(token, process.env.JWT_KEY as string) as any;
    const result = {
      id: payload.id, 
      role: payload.role
      };
    return result;
  }
}