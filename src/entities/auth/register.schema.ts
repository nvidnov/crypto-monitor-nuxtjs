import * as z from "zod";

export const registerSchema = z
  .object({
    firstName: z.string().min(1, "Имя обязательно"),
    lastName: z.string().min(1, "Фамилия обязательна"),
    login: z.string().min(1, "Логин обязателен"),
    email: z.string().min(1, "Email обязателен").email("Некорректный email"),
    password: z
      .string()
      .min(1, "Введите пароль")
      .min(6, "Пароль минимум 6 символов"),
    confirmPassword: z.string().min(1, "Введите пароль"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Пароли не совпадают",
    path: ["confirmPassword"],
  });
