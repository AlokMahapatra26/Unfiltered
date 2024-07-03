import {z} from "zod"

export const messageSchema = z.object({
    content:z
        .string()
        .min(10 , {message : 'Content must be atleast 10 character'})
        .max(4000 , {message : "Content must be at not longer than 4000 characters"})
})