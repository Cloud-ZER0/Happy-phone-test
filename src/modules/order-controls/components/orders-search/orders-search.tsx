"use client";

import React from "react";

import { useOrdersControlsContext } from "@/modules/order-controls/context/order-controls-context.hook";
import { Search } from "@/modules/shared/components/controls/search";

import { useOrdersContext } from "../../../order/context/orders-context.hooks";

export const OrdersSearch = () => {
	const { options } = useOrdersContext();
	const { handleSearch } = useOrdersControlsContext();

	const handleClearCitySearch = () => {
		handleSearch({ ...options.search, city: "" });
	};

	const handleCitySearchChange = (city: string) => {
		handleSearch({ ...options.search, city });
	};

	const handleClearNameSearch = () => {
		handleSearch({ ...options.search, name: "" });
	};

	const handleNameSearchChange = (name: string) => {
		handleSearch({ ...options.search, name });
	};

	return (
		<div className="w-full flex flex-col gap-4">
			<Search
				handleSearch={handleNameSearchChange}
				handleClearSearch={handleClearNameSearch}
				value={options.search.name}
				placeholder="Поиск по имени получателя"
			/>
			<Search
				handleSearch={handleCitySearchChange}
				handleClearSearch={handleClearCitySearch}
				value={options.search.city}
				placeholder="Поиск по месту назначения"
			/>
		</div>
	);
};
