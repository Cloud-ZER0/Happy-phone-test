/* eslint-disable @typescript-eslint/no-unused-vars */
import { createContext } from "react";

import { type OrdersContextType } from "./order-context.types";

const ORDERS_CONTEXT_INITIAL_VALUE: OrdersContextType = {
	orders: [],
	options: {
		search: {
			city: "",
			name: "",
		},
		filter: "",
	},
	handlers: {
		handleRemoveOrder(_id) {
			/* empty */
		},
	},
};

export const OrdersContext = createContext<OrdersContextType>(
	ORDERS_CONTEXT_INITIAL_VALUE,
);
