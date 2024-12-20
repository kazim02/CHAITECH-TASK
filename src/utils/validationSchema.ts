import { z } from "zod";

// using zod for better and clean validation 
export const registerSchema = z.object({
  firstName: z.string().min(1, "First nama is required"),
  lastName: z.string().min(1, "Last nama is required"),
  email: z.string().email("Invalid email address"),
  password: z.string().min(6, "Password must be at least 6 charactrs"),
  phone: z.string().optional(),
});

export type RegisterSchema = z.infer<typeof registerSchema>;

export const loginSchema = z.object({
  email: z.string().email("Invalid email address"),
  password: z.string().min(6, "Password must be at least 6 charactrs"),
});

export type LoginSchema = z.infer<typeof loginSchema>;
