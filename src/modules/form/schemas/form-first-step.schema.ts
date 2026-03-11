import * as z from "zod";

import { FormFirstStepErrorsCodes } from "../errors/codes/first-step-error-codes";

export const firstStepFormSchema = z.object({
	senderName: z.string().min(2, FormFirstStepErrorsCodes.senderName.required),
	phone: z
		.string()
		.min(1, FormFirstStepErrorsCodes.phone.required)
		.refine(
			(val) => val.replaceAll(/\D/g, "").length === 11,
			FormFirstStepErrorsCodes.phone.format,
		)
		.transform((val) => val.replaceAll(/\D/g, "")),
	senderCity: z.string().min(1, FormFirstStepErrorsCodes.senderCity.required),
});

export type FirtStepFormOptions = z.infer<typeof firstStepFormSchema>;
