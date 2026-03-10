import * as z from "zod";

import { FormFirstStepErrorsCodes } from "./errors";

export const firstStepFormSchema = z.object({
	name: z.string().min(2, FormFirstStepErrorsCodes.name.required),
	phone: z
		.string()
		.min(10, FormFirstStepErrorsCodes.phone.required)
		.max(15, FormFirstStepErrorsCodes.phone.max)
		.regex(/^[\d\s()+\-]+$/, FormFirstStepErrorsCodes.phone.format),
	from: z.string().min(1, FormFirstStepErrorsCodes.from.required),
});

export type FirtStepFormOptions = z.infer<typeof firstStepFormSchema>;
