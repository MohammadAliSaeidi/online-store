import z from "zod";

export const authFormSchema = z.object({
     username: z.string().min(0, "Username is required"),
     password: z.string().min(0, "password is required")
})