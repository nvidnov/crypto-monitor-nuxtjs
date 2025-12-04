import { ref } from "vue";
import { registerSchema } from "~/entities/user/model/register.schema";

export function useRegisterForm() {
  const form = reactive({
    firstName: "",
    lastName: "",
    login: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const isLoading = ref(false);

  const onSubmit = async () => {
    // Здесь логика регистрации
    try {
      // Пример:
      // await $fetch('/api/auth/register', {
      //   method: 'POST',
      //   body: form
      // });
      // navigateTo('/dashboard');
    } catch (error) {
      console.error("Ошибка регистрации:", error);
    }
  };
  return { form, isLoading, registerSchema, onSubmit };
}
