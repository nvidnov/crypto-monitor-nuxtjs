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
