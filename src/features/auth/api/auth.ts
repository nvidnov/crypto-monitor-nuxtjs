import type {
  IPayloadCheckVerificationCode,
  IPayloadRegister,
  IPayloadVerificationCode,
} from "~/entities/user/types";
import { useApi } from "~/shared/composable/useApi";

export function register(payload: IPayloadRegister) {
  const api = useApi();

  return api("/api/users/create", {
    method: "POST",
    body: payload,
  });
}

export function sendVerificationCode(payload: IPayloadVerificationCode) {
  const api = useApi();

  return api("/verification/send", {
    method: "POST",
    body: payload,
  });
}

export function checkVerificationCode(payload: IPayloadCheckVerificationCode) {
  const api = useApi();

  return api("/verification/check", {
    method: "POST",
    body: payload,
  });
}
