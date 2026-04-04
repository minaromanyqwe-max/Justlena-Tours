import z from "zod";
export const registerSchema = z.object({
    name: z.string().min(1, "Name is required").nonempty("Name cannot be empty"),
    email: z.string().email("Invalid email address"),
    password: z.string().min(6, "Password must be at least 6 characters long"),
    repassword: z.string().min(6, "Password must be at least 6 characters long"),
    phone: z.string().min(10, "Phone number must be at least 10 characters long").max(15, "Phone number cannot exceed 15 characters")

}).refine((data)=>data.password === data.repassword, {
    message: "Passwords do not match",
    path:["repassword"]
})

export type RegisterInput = z.infer<typeof registerSchema>;