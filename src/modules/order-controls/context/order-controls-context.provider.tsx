"use client";

import { useCallback, useMemo, type PropsWithChildren } from "react";

import {
	CITY_SEARCH_PARAMS_KEY,
	NAME_SEARCH_PARAMS_KEY,
} from "@/modules/order/constants";
import { useSearchParams } from "@/modules/shared/hooks/use-search-params";

import { OrdersControlsContext } from "./order-controls-context";
import {
	type HandleFilterChange,
	type HandleSearch,
	type OrderControlsContextOptions,
} from "./order-controls-context.types";

export const OrdersControlsProvider = ({ children }: PropsWithChildren) => {
	const { set } = useSearchParams();

	const handleSearch: HandleSearch = useCallback(
		(search) => {
			set({
				[CITY_SEARCH_PARAMS_KEY]: search.city,
				[NAME_SEARCH_PARAMS_KEY]: search.name,
			});
		},
		[set],
	);

	const handleFilterChange: HandleFilterChange = useCallback(
		(filter) => {
			set({
				filter,
			});
		},
		[set],
	);

	const value: OrderControlsContextOptions = useMemo(
		() => ({
			handleFilterChange,
			handleSearch,
		}),
		[handleFilterChange, handleSearch],
	);

	return (
		<OrdersControlsContext.Provider value={value}>
			{children}
		</OrdersControlsContext.Provider>
	);
};
