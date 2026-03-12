import * as z from "zod";

import { firstStepFormSchema } from "@/modules/form/schemas/form-first-step.schema";
import { secondStepFormSchema } from "@/modules/form/schemas/form-second-step.schema";

export const orderSchema = firstStepFormSchema
	.and(secondStepFormSchema)
	.and(
		z
			.object({
				id: z.string(),
				status: z.enum(["active", "canceled"]),
				createdAt: z.string(),
			})
			.strict(),
	);

export const ordersSchema = z.array(orderSchema);

export type OrderType = z.infer<typeof orderSchema>;
