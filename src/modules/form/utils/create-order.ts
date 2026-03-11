import { type OrderType } from "@/modules/order/types";

import { type FormOptions } from "../schemas";

export const createOrder = (formData: Required<FormOptions>): OrderType => {
	return {
		id: crypto.randomUUID(),
		cargoType: formData.secondStep.cargoType,
		from: formData.firstStep.from,
		fromName: formData.firstStep.name,
		phone: formData.firstStep.phone,
		status: "active",
		to: formData.secondStep.to,
		toName: formData.secondStep.reciverName,
		weight: formData.secondStep.weight,
		createdAt: new Date().toLocaleDateString("ru"),
	};
};
