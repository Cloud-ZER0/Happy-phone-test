/* eslint-disable @typescript-eslint/no-unused-vars */
import { createContext } from "react";

import { type OrderControlsContextOptions } from "./order-controls-context.types";

const ORDERS_CONTROLS_CONTEXT_INITIAL_VALUE: OrderControlsContextOptions = {
	handleFilterChange(_filter) {
		/* empty */
	},

	handleSearch(_search) {
		/* empty */
	},
};

export const OrdersControlsContext = createContext<OrderControlsContextOptions>(
	ORDERS_CONTROLS_CONTEXT_INITIAL_VALUE,
);
