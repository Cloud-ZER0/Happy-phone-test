import { type CargoType } from "@/modules/form/schemas";

export interface OrderType {
	fromName: string;
	toName: string;
	phone: string;
	from: string;
	to: string;
	cargoType: CargoType;
	weight: number;
}
