import { z, ZodType } from "zod";
import { otpType } from "../zodTypes/otpType";

export const otpSchema: ZodType<otpType> = z.object({
  pin: z
    .string()
    // .min(4, "PIN must be at least 4 characters long")
    .max(5, "PIN must be at most 6 characters long"),
});
