import { type CargoType } from "@/modules/form/schemas";

import { type OrderType } from "../types";

export type HandlerRemoveOrder = (id: string) => void;

export type FilterType = CargoType | "";

export interface SearchOptions {
	name: string;
	city: string;
}

export interface OrdersContextType {
	orders: OrderType[];
	options: {
		search: SearchOptions;
		filter: FilterType;
	};
	handlers: {
		handleRemoveOrder: HandlerRemoveOrder;
	};
}
