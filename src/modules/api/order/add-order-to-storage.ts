import { type OrderType } from "@/modules/order/types";

import { LOCAL_STORAGE_ORDERS_KEY } from "../constants";

export const addOrderToStorage = (order: OrderType): void => {
	const prevOrders = localStorage.getItem(LOCAL_STORAGE_ORDERS_KEY);
	if (prevOrders != undefined) {
		localStorage.setItem(
			LOCAL_STORAGE_ORDERS_KEY,
			JSON.stringify([...(JSON.parse(prevOrders) as OrderType[]), order]),
		);
	} else {
		localStorage.setItem(LOCAL_STORAGE_ORDERS_KEY, JSON.stringify([order]));
	}
};
