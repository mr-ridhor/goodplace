import { z, ZodType } from "zod";
import { companyType } from "../zodTypes/companyType";

export const companySchema: ZodType<companyType> = z.object({
  companyName: z.string().min(1, "Company name is required"),
  website: z.string().url("Invalid website URL"),
  industry: z.string().min(1, "Industry is required"),
  companyEmail: z.string().email("Invalid company email address"),
  phone: z.string().min(1, "Phone number is required"),
  revenue: z.string().min(1, "Revenue is required"),
  prevRevenue: z.string().min(1, "Previous revenue is required"),
  country: z.string().min(1, "Country is required"),
  city: z.string().min(1, "City is required"),
  fundingYear: z.string().min(1, "Funding year is required"),
  grossProfit: z.string().min(1, "Gross profit is required"),
  prevGross: z.string().min(1, "Previous gross profit is required"),
  ebitda: z.string().min(1, "EBITDA is required"),
  preEbitda: z.string().min(1, "Previous EBITDA is required"),
});
