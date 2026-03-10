import * as z from "zod";

import { FormSecondStepErrorsCodes } from "./errors";

const cargoType = z.enum(
	["document", "fragile", "regular"],
	FormSecondStepErrorsCodes.cargoType.required,
);

export const secondStepFormSchema = z.object({
	reciverName: z.string().min(2, FormSecondStepErrorsCodes.name.required),
	to: z.string().min(1, FormSecondStepErrorsCodes.to.required),
	cargoType: cargoType,
	weight: z.coerce
		.number(FormSecondStepErrorsCodes.weight.format)
		.min(0.1, FormSecondStepErrorsCodes.weight.min)
		.max(30, FormSecondStepErrorsCodes.weight.max),
});

export type SecondStepFormOptions = z.infer<typeof secondStepFormSchema>;

export type CargoType = z.infer<typeof cargoType>;
