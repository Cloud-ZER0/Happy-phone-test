import * as z from "zod";

import { firstStepFormSchema } from "./form-first-step.schema";
import { secondStepFormSchema } from "./form-second-step.schema";

export const formOptionsSchema = z
	.object({
		firstStep: firstStepFormSchema.optional(),
		secondStep: secondStepFormSchema.optional(),
		currentStep: z.enum(["1", "2", "3"]),
	})
	.strict();

export type FormOptions = z.infer<typeof formOptionsSchema>;

