"use client";

import React, {
	useCallback,
	useMemo,
	useState,
	type PropsWithChildren,
} from "react";

import { useSearchParams } from "@/modules/shared/hooks/use-search-params";

import {
	CITY_SEARCH_PARAMS_KEY,
	FILTER_PARAMS_KEY,
	LOCAL_STORAGE_ORDERS_KEY,
	NAME_SEARCH_PARAMS_KEY,
} from "../constants";
import { type OrderType } from "../types";
import { getSearchMatch } from "../utils/get-search-match";
import {
	type FilterType,
	type HandlerRemoveOrder,
	type OrdersContextType,
} from "./order-context.types";
import { OrdersContext } from "./orders-context";

export const OrdersProvider = ({ children }: PropsWithChildren) => {
	const { get } = useSearchParams();

	const [orders, setOrders] = useState<OrderType[]>(() => {
		const maybeOrders = localStorage.getItem(LOCAL_STORAGE_ORDERS_KEY);
		return maybeOrders != undefined
			? (JSON.parse(maybeOrders) as OrderType[])
			: [];
	});

	const nameSearchQuery = get(NAME_SEARCH_PARAMS_KEY) ?? "";
	const citySearchQuery = get(CITY_SEARCH_PARAMS_KEY) ?? "";
	const filterQuery = get(FILTER_PARAMS_KEY) ?? "";

	const filteredOrders = useMemo(() => {
		return orders.filter((order): boolean => {
			const matchesName = getSearchMatch(order.fromName, nameSearchQuery);
			const matchesCity = getSearchMatch(order.from, citySearchQuery);
			const matchesCargoType = getSearchMatch(order.cargoType, filterQuery);

			return matchesName && matchesCity && matchesCargoType;
		});
	}, [orders, nameSearchQuery, citySearchQuery, filterQuery]);

	const handleRemoveOrder: HandlerRemoveOrder = useCallback((id) => {
		setOrders((orders) => {
			const filtred = orders.filter((order) => order.id !== id);

			localStorage.setItem(LOCAL_STORAGE_ORDERS_KEY, JSON.stringify(filtred));
			return filtred;
		});
	}, []);

	const value: OrdersContextType = useMemo(
		() => ({
			orders: filteredOrders,
			options: {
				search: {
					city: citySearchQuery,
					name: nameSearchQuery,
				},
				filter: filterQuery as FilterType,
			},
			handlers: {
				handleRemoveOrder,
			},
		}),
		[
			citySearchQuery,
			filterQuery,
			filteredOrders,
			handleRemoveOrder,
			nameSearchQuery,
		],
	);

	return (
		<OrdersContext.Provider value={value}>{children}</OrdersContext.Provider>
	);
};
