import { type OrderType } from "@/modules/order/types";

import { LOCAL_STORAGE_ORDERS_KEY } from "../constants";
import { setLocalStorageItem } from "../storage/safe-storage";
import { getOrdersStorage } from "./get-orders-storage";

export const addOrderToStorage = (order: OrderType): void => {
	const next = [...getOrdersStorage(), order];
	setLocalStorageItem(LOCAL_STORAGE_ORDERS_KEY, next);
};
