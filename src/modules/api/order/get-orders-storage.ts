import { type OrderType } from "@/modules/order/types";

import { LOCAL_STORAGE_ORDERS_KEY } from "../constants";

export const getOrdersStorage = (): OrderType[] => {
	const maybeOrders = localStorage.getItem(LOCAL_STORAGE_ORDERS_KEY);
	return maybeOrders != undefined
		? (JSON.parse(maybeOrders) as OrderType[])
		: [];
};
