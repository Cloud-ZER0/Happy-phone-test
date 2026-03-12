import { type OrderType } from "@/modules/order/types";

import { getOrdersStorage } from "./get-orders-storage";

export const getOrderById = (id: string): OrderType | undefined => {
	return getOrdersStorage().find((order) => order.id === id);
};
