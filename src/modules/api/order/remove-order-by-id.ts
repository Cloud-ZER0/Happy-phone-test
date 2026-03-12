import { type OrderType } from "@/modules/order/types";

import { LOCAL_STORAGE_ORDERS_KEY } from "../constants";
import { setLocalStorageItem } from "../storage/safe-storage";
import { getOrdersStorage } from "./get-orders-storage";

export const removOrderById = (id: string): void => {
	const next: OrderType[] = getOrdersStorage().filter((order) => order.id !== id);
	setLocalStorageItem(LOCAL_STORAGE_ORDERS_KEY, next);
};
