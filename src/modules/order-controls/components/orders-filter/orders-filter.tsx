"use client";

import React from "react";

import { type FilterType } from "@/modules/order/context/order-context.types";
import { useOrdersContext } from "@/modules/order/context/orders-context.hooks";
import { Select } from "@/modules/shared/components/controls/select";

import { useOrdersControlsContext } from "../../context/order-controls-context.hook";

export const OrdersFilters = () => {
	const { handleFilterChange } = useOrdersControlsContext();
	const { options } = useOrdersContext();

	const onChange = (
		e: React.ChangeEvent<HTMLSelectElement, HTMLInputElement>,
	) => {
		handleFilterChange(e.target.value as FilterType);
	};

	return (
		<div className="flex flex-col gap-3">
			<span className="text text-xl text-black">Тип груза:</span>
			<Select
				defaultValue={options.filter}
				onChange={onChange}
				name="cargoType"
			>
				<option disabled={options.filter === ""} value="">
					Все
				</option>
				<option value="document">Документ</option>
				<option value="fragile">Хрупкое</option>
				<option value="regular">Обычное</option>
			</Select>
		</div>
	);
};
