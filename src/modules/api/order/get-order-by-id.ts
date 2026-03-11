import { type OrderType } from "@/modules/order/types";

import { LOCAL_STORAGE_ORDERS_KEY } from "../constants";

export const getOrderById = (id: string): OrderType | undefined => {
	const rawOrders = localStorage.getItem(LOCAL_STORAGE_ORDERS_KEY);

	if (rawOrders == undefined) {
		return undefined;
	}

	const orders = JSON.parse(rawOrders) as OrderType[];

	return orders.find((order) => order.id === id);
};
