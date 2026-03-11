"use client";

import { useContext } from "react";

import { OrdersControlsContext } from "./order-controls-context";

export const useOrdersControlsContext = () => {
	const ordersControls = useContext(OrdersControlsContext);
	// eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
	if (ordersControls === undefined) {
		throw new Error("useOrdersControlsContext must be used within a provider");
	}
	return ordersControls;
};
