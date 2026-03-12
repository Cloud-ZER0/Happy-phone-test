import { type OrderType } from "@/modules/order/types";

import { LOCAL_STORAGE_ORDERS_KEY } from "../constants";
import { getLocalStorageItem } from "../storage/safe-storage";
import { ordersSchema } from "../storage/storage.schemas";

export const getOrdersStorage = (): OrderType[] => {
	return getLocalStorageItem(LOCAL_STORAGE_ORDERS_KEY, ordersSchema) ?? [];
};
