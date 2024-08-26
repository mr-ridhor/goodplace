import { ZodType, z } from "zod";
import { teamType } from "../zodTypes/teamType";

export const teamSchema: ZodType<teamType> = z.object({
  fullName: z.string().min(1, "Full name is required"),
  role: z.string().min(1, "Role is required"),
  fullName2: z.string().min(1, "Full name 2 is required"),
  role2: z.string().min(1, "Role 2 is required"),
});
