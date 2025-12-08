import type {
  IPayloadCheckVerificationCode,
  IPayloadRegister,
  IPayloadVerificationCode,
} from "~/entities/user/types";

export function register(payload: IPayloadRegister) {
  const { $api } = useNuxtApp();

  return $api("/api/users/create", {
    method: "POST",
    body: payload,
  });
}

export function sendVerificationCode(payload: IPayloadVerificationCode) {
  const { $api } = useNuxtApp();

  return $api("/verification/send", {
    method: "POST",
    body: payload,
  });
}

export function checkVerificationCode(payload: IPayloadCheckVerificationCode) {
  const { $api } = useNuxtApp();

  return $api("/verification/check", {
    method: "POST",
    body: payload,
  });
}
