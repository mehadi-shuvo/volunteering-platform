import { z } from "zod";

const userCreateValidation = {
  body: {
    name: z.string({
      required_error: "Name is required",
    }),
    email: z
      .string({
        required_error: "Email is required",
      })
      .email({
        message: "Invalid email",
      }),
    password: z.string({
      required_error: "Password is required",
    }),
    skills: z.array(z.string(), {
      required_error: "Skills are required",
    }),
    causes_supported: z.array(z.string(), {
      required_error: "Causes supported are required",
    }),
    volunteer_history: z.array(z.string(), {
      required_error: "Volunteer history is required",
    }),
  },
};

export const userValidations = {
  userCreateValidation,
};
