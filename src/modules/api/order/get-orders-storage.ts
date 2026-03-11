import { type OrderType } from "@/modules/order/types";

import { LOCAL_STORAGE_ORDERS_KEY } from "../constants";

export const getOrdersStorage = (): OrderType[] => {
	// eslint-disable-next-line unicorn/prefer-global-this
	if (typeof window !== "undefined") {
		const maybeOrders = localStorage.getItem(LOCAL_STORAGE_ORDERS_KEY);
		return maybeOrders != undefined
			? (JSON.parse(maybeOrders) as OrderType[])
			: [];
	}

	return [];
};
