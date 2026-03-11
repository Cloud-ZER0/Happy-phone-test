import React from "react";

import { OrdersControlsProvider } from "../../context/order-controls-context.provider";
import { OrdersFilters } from "../orders-filter";
import { OrdersSearch } from "../orders-search";

export const OrdersControls = () => {
	return (
		<OrdersControlsProvider>
			<OrdersSearch />
			<OrdersFilters />
		</OrdersControlsProvider>
	);
};
