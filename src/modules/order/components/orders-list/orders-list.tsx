"use client";

import { clsx } from "clsx";
import React from "react";

import { useOrdersContext } from "../../context/orders-context.hooks";
import {
	RemoveOrderModal,
	RemoveOrderModalProvider,
} from "../modals/remove-order-modal";
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
			<RemoveOrderModalProvider>
				{orders.map((order) => (
					<OrderCardShort key={order.id} {...order}>
						<RemoveOrderModal
							id={order.id}
							onRemove={() => {
								handlers.handleRemoveOrder(order.id);
							}}
						/>
					</OrderCardShort>
				))}
			</RemoveOrderModalProvider>
		</div>
	);
};
