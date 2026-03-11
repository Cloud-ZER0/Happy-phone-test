import { type OrderType } from "@/modules/order/types";

import { type FormOptions } from "../types";

export const createOrder = (formData: Required<FormOptions>): OrderType => {
	return {
		id: crypto.randomUUID(),
		cargoType: formData.secondStep.cargoType,
		phone: formData.firstStep.phone,
		status: "active",
		weight: formData.secondStep.weight,
		createdAt: new Date().toLocaleDateString("ru"),
		recipientCity: formData.secondStep.recipientCity,
		recipientName: formData.secondStep.recipientName,
		senderCity: formData.firstStep.senderCity,
		senderName: formData.firstStep.senderName,
	};
};
