import { ref } from "vue";
import { registerSchema } from "~/entities/auth/register.schema";
import {
  checkVerificationCode,
  sendVerificationCode,
} from "~/features/auth/api/auth";
import type { IPayloadCheckVerificationCode } from "~/entities/user/types";

export function useRegisterForm(emit?: any) {
  const form = reactive({
    firstName: "",
    lastName: "",
    login: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const isLoading = ref(false);

  const fetchSendVerificationCode = async () => {
    isLoading.value = true;
    try {
      await sendVerificationCode({ email: form.email });
      emit("setForm", form);
    } catch (error) {
      console.error("Ошибка регистрации:", error);
    } finally {
      isLoading.value = false;
    }
  };

  const fetchCheckVerificationCode = async (
    payload: IPayloadCheckVerificationCode,
  ) => {
    isLoading.value = true;
    try {
      await checkVerificationCode(payload);
    } catch (error: any) {
      console.error("Ошибка регистрации:", error);
    } finally {
      isLoading.value = false;
    }
  };

  return {
    form,
    isLoading,
    registerSchema,
    fetchSendVerificationCode,
    fetchCheckVerificationCode,
  };
}
