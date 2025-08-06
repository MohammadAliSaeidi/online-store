import z from "zod";
import { authFormSchema } from "../schema";

export type AuthFormValues = z.infer<typeof authFormSchema>