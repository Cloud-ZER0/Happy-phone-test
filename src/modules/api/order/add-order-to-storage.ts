import { type OrderType } from "@/modules/order/types";

import { LOCAL_STORAGE_ORDERS_KEY } from "../constants";

export const addOrderToStorage = (order: OrderType): void => {
	// eslint-disable-next-line unicorn/prefer-global-this
	if (typeof window !== "undefined") {
		const prevOrders = localStorage.getItem(LOCAL_STORAGE_ORDERS_KEY);
		if (prevOrders != undefined) {
			localStorage.setItem(
				LOCAL_STORAGE_ORDERS_KEY,
				JSON.stringify([...(JSON.parse(prevOrders) as OrderType[]), order]),
			);
		} else {
			localStorage.setItem(LOCAL_STORAGE_ORDERS_KEY, JSON.stringify([order]));
		}
	}
};
