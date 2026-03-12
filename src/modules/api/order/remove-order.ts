import { type OrderType } from "@/modules/order/types";

import { LOCAL_STORAGE_ORDERS_KEY } from "../constants";
import { setLocalStorageItem } from "../storage/safe-storage";

export interface RemoveOrderOptions {
	orders: OrderType[];
	id: string;
}

export const removeOrder = ({
	orders,
	id,
}: RemoveOrderOptions): OrderType[] => {
	const filtred = orders.filter((order) => order.id !== id);
	setLocalStorageItem(LOCAL_STORAGE_ORDERS_KEY, filtred);
	return filtred;
};
