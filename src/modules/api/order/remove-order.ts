import { type OrderType } from "@/modules/order/types";

import { LOCAL_STORAGE_ORDERS_KEY } from "../constants";

export interface RemoveOrderOptions {
	orders: OrderType[];
	id: string;
}

export const removeOrder = ({ orders, id }: RemoveOrderOptions) => {
	const filtred = orders.filter((order) => order.id !== id);
	localStorage.setItem(LOCAL_STORAGE_ORDERS_KEY, JSON.stringify(filtred));
	return filtred;
};
