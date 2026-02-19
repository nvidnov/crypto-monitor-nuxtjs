import { defineStore } from "pinia";
import { reactive, ref } from "vue";
import type { IRegisterForm } from "~/entities/auth/types";
import { registerSchema } from "~/entities/auth/register.schema";
import type {
  IPayloadRegister,
  IResolveRegistration,
  IResult,
} from "~/entities/user/types";
import { register } from "~/features/auth/api/auth";

export const useRegistrationStore = defineStore("registration", () => {
  const step = ref(1);
  const isLoading = ref(false);
  const schema = registerSchema;

  const form = reactive<IRegisterForm>({
    firstName: "",
    lastName: "",
    login: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const setForm = (newDataForm: IRegisterForm) => {
    Object.assign(form, newDataForm);
  };

  const nextStep = () => {
    step.value = step.value + 1;
  };
  const prevStep = () => {
    step.value = step.value - 1;
  };

  const resetStep = () => {
    step.value = 1;
  };

  const resetForm = () => {
    (Object.keys(form) as Array<keyof IRegisterForm>).forEach((key) => {
      form[key] = "";
    });
  };

  const fetchRegistrationUser = async (payload: IPayloadRegister) => {
    const result: IResult<IResolveRegistration> = {
      success: null,
      error: null,
    };
    isLoading.value = true;
    try {
      const response = await register(payload);
      if (response) {
        result.success = response;
        resetStep();
        resetForm();
      }
    } catch (error: any) {
      const message =
        error?.data?.message ||
        error?.response?._data?.message ||
        error?.message ||
        "Ошибка регистрации";
      result.error = String(message);
      result.success = null;
      console.error("Ошибка регистрации:", error);
      throw error;
    } finally {
      isLoading.value = false;
    }
    return result;
  };

  return {
    step,
    form,
    schema,
    nextStep,
    prevStep,
    resetStep,
    setForm,
    resetForm,
    fetchRegistrationUser,
  };
});
