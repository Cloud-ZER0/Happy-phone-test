"use client";

import { useContext } from "react";

import { OrdersContext } from "./orders-context";

export const useOrdersContext = () => {
	const orders = useContext(OrdersContext);
	// eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
	if (orders === undefined) {
		throw new Error("useOrdersContext must be used within a provider");
	}
	return orders;
};
