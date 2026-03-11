import { type CargoType } from "@/modules/form/schemas";

export interface OrderType {
	id: string;
	status: "active" | "canceled";
	fromName: string;
	toName: string;
	phone: string;
	from: string;
	to: string;
	cargoType: CargoType;
	weight: number;
	createdAt: string;
}
