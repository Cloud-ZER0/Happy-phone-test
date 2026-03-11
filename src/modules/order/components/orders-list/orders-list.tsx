"use client";

import { clsx } from "clsx";
import React from "react";

import { Button } from "@/modules/shared/components/controls/button";

import { useOrdersContext } from "../../context/orders-context.hooks";
import { OrderCardShort } from "../order-card-short";

export interface OrdersList {
	className?: string;
}

export const OrdersList = ({ className }: OrdersList) => {
	const { orders, handlers } = useOrdersContext();

	if (orders.length === 0) {
		return <h1>Not found</h1>;
	}

	return (
		<div className={clsx("grid grid-cols-3 gap-6", className)}>
			{orders.map((order) => (
				<OrderCardShort key={order.id} {...order}>
					<Button
						onClick={() => {
							handlers.handleRemoveOrder(order.id);
						}}
					>
						Удалить
					</Button>
				</OrderCardShort>
			))}
		</div>
	);
};
