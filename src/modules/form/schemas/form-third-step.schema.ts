import * as z from "zod";

import { FormThirdStepErrorsCodes } from "../errors/codes/third-step-error-codes";

export const thirdStepFormSchema = z.object({
	agreement: z
		.boolean()
		.refine((val) => val, FormThirdStepErrorsCodes.agreement.required),
});

export type ThirdStepFormOptions = z.infer<typeof thirdStepFormSchema>;
