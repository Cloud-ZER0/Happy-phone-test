import { type OrderType } from "@/modules/order/types";

import { LOCAL_STORAGE_ORDERS_KEY } from "../constants";

export interface RemoveOrderOptions {
	orders: OrderType[];
	id: string;
}

export const removeOrder = ({
	orders,
	id,
}: RemoveOrderOptions): OrderType[] => {
	// eslint-disable-next-line unicorn/prefer-global-this
	if (typeof window !== "undefined") {
		const filtred = orders.filter((order) => order.id !== id);
		localStorage.setItem(LOCAL_STORAGE_ORDERS_KEY, JSON.stringify(filtred));
		return filtred;
	}

	return [];
};
