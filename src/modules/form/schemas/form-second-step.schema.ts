import * as z from "zod";

import { FormSecondStepErrorsCodes } from "./form-second-step.errors";

const cargoType = z
	.enum(["document", "fragile", "regular", ""])
	.refine((data) => data !== "", FormSecondStepErrorsCodes.cargoType.required);

export const secondStepFormSchema = z.object({
	recipientName: z
		.string()
		.min(2, FormSecondStepErrorsCodes.recipientName.required),
	recipientCity: z
		.string()
		.min(1, FormSecondStepErrorsCodes.recipientCity.required),
	cargoType: cargoType,
	weight: z.coerce
		.number(FormSecondStepErrorsCodes.weight.format)
		.min(0.1, FormSecondStepErrorsCodes.weight.min)
		.max(30, FormSecondStepErrorsCodes.weight.max),
});

export type SecondStepFormOptions = z.infer<typeof secondStepFormSchema>;

export type CargoType = z.infer<typeof cargoType>;
