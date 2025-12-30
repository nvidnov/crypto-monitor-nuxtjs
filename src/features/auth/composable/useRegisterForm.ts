import { ref } from "vue";
import {
  checkVerificationCode,
  register,
  sendVerificationCode,
} from "~/features/auth/api/auth";
import type {
  IPayloadCheckVerificationCode,
  IPayloadRegister,
  IResolveCheckVerificationCode,
  IResolveRegistration,
  IResult,
} from "~/entities/user/types";
import { useRegistrationStore } from "~/entities/auth/model/registration";
import type { ITimelineItem } from "~/features/auth/types/types";

export function useRegisterForm() {
  const isLoading = ref<boolean>(false);
  const isSuccess = ref<boolean>(false);
  const store = useRegistrationStore();
  const timelineItems = ref<ITimelineItem[]>([
    {
      title: "Заполнение формы",
      description: "Укажите данные для нового аккаунта",
      icon: "i-lucide-rocket",
    },
    {
      title: "Проверка",
      description: "Пройдите верификацию почты",
      icon: "i-lucide-palette",
    },
    {
      title: "Завершение регистрации",
      description: "Frontend and backend development.",
      icon: "i-lucide-code",
    },
  ]);

  // Отправить код верификации
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

  // Проверка кода верификации
  const fetchCheckVerificationCode = async (
    payload: IPayloadCheckVerificationCode,
  ): Promise<IResult<IResolveCheckVerificationCode | null>> => {
    const result: IResult<IResolveCheckVerificationCode> = {
      success: null,
      error: null,
    };

    isSuccess.value = false;
    isLoading.value = true;

    try {
      const data = await checkVerificationCode(payload);

      if (data) {
        result.success = data;
        isSuccess.value = true;
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
    isSuccess,
    timelineItems,
    fetchSendVerificationCode,
    fetchCheckVerificationCode,
  };
}
