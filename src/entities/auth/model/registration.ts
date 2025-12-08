import { defineStore } from "pinia";
import { reactive, ref } from "vue";
import type { IRegisterForm } from "~/entities/auth/types";

export const useRegistrationStore = defineStore("registration", () => {
  const step = ref(1);
  let form = reactive<IRegisterForm>({
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

  const resetForm = () => {
    (Object.keys(form) as Array<keyof IRegisterForm>).forEach((key) => {
      form[key] = "";
    });
  };

  return { step, form, nextStep, prevStep, setForm, resetForm };
});
