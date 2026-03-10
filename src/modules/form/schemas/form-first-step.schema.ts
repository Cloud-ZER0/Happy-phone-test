import * as z from "zod";

import { FormFirstStepErrorsCodes } from "./errors";

export const firstStepFormSchema = z.object({
	name: z.string().min(2, FormFirstStepErrorsCodes.name.required),
	phone: z
		.string()
		.min(1, FormFirstStepErrorsCodes.phone.required)
		.refine(
			(val) => val.replaceAll(/\D/g, "").length === 11,
			FormFirstStepErrorsCodes.phone.format,
		)
		.transform((val) => val.replaceAll(/\D/g, "")),
	from: z.string().min(1, FormFirstStepErrorsCodes.from.required),
});

export type FirtStepFormOptions = z.infer<typeof firstStepFormSchema>;
