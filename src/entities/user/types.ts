import { IdRole } from "~/entities/user/enum";

export interface IPayloadRegister {
  firstName: string;
  lastName: string;
  login: string;
  password: string;
  email: string;
  role: IdRole;
}

export interface IPayloadVerificationCode {
  email: string;
}

export interface IPayloadCheckVerificationCode {
  email: string;
  code: string;
}

export interface IResolveCheckVerificationCode {
  verified: boolean;
}

export interface IResult<T> {
  success: T | null;
  error: string | null;
}

export interface IResolveCheckVerificationCode {
  verified: boolean;
}
