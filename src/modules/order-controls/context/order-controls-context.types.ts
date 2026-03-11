import { type CargoType } from "@/modules/form/types";
import { type SearchOptions } from "@/modules/order/context/order-context.types";

export type HandleSearch = ({ name, city }: SearchOptions) => void;
export type HandleFilterChange = (filter: CargoType | "") => void;
export type HandlerRemoverOrder = (id: string) => void;

export interface OrderControlsContextOptions {
	handleSearch: HandleSearch;
	handleFilterChange: HandleFilterChange;
}
