import { ref } from "vue";
import { registerSchema } from "~/entities/auth/register.schema";
import {
  checkVerificationCode,
  sendVerificationCode,
} from "~/features/auth/api/auth";
import type {
  IPayloadCheckVerificationCode,
  IResolveCheckVerificationCode,
  IResult,
} from "~/entities/user/types";
import { useRegistrationStore } from "~/entities/auth/model/registration";

export function useRegisterForm() {
  const isLoading = ref(false);
  const store = useRegistrationStore();

  const fetchSendVerificationCode = async () => {
    isLoading.value = true;
    try {
      await sendVerificationCode({ email: store.form.email });
      store.nextStep();
    } catch (error) {
      console.error("Ошибка верификации:", error);
    } finally {
      isLoading.value = false;
    }
  };

  const fetchCheckVerificationCode = async (
    payload: IPayloadCheckVerificationCode,
  ): Promise<IResult<IResolveCheckVerificationCode | null>> => {
    const result: IResult<IResolveCheckVerificationCode> = {
      success: null,
      error: null,
    };
    isLoading.value = true;
    try {
      const data = await checkVerificationCode(payload);

      if (data) {
        result.success = data;
        store.nextStep();
      }
    } catch (error: any) {
      if (error) {
        result.error = error.data.message;
      }
      console.error("Ошибка регистрации:", error);
    } finally {
      isLoading.value = false;
    }
    return result;
  };

  return {
    isLoading,
    registerSchema,
    fetchSendVerificationCode,
    fetchCheckVerificationCode,
  };
}
