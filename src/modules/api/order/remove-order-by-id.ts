import { type OrderType } from "@/modules/order/types";

import { LOCAL_STORAGE_ORDERS_KEY } from "../constants";

export const removOrderById = (id: string): void => {
	// eslint-disable-next-line unicorn/prefer-global-this
	if (typeof window !== "undefined") {
		const rawOrders = localStorage.getItem(LOCAL_STORAGE_ORDERS_KEY);

		if (rawOrders == undefined) {
			return;
		}

		const orders = JSON.parse(rawOrders) as OrderType[];

		localStorage.setItem(
			LOCAL_STORAGE_ORDERS_KEY,
			JSON.stringify(orders.filter((order) => order.id !== id)),
		);
	}
};
