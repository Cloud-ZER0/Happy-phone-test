"use client";

import Link from "next/link";
import React from "react";

import { getOrderById } from "@/modules/api/order/get-order-by-id";

import { OrderCardFull } from "../order-card-full";

export interface OrderPageContent {
	id: string;
}

export const OrderPageContent = ({ id }: OrderPageContent) => {
	const order = getOrderById(id);

	if (order == undefined) {
		return (
			<div className="flex flex-col gap-3 w-full justify-center">
				<h1>Заказ с id {id} не найден</h1>
				<Link href="/">Назад</Link>
			</div>
		);
	}

	return <OrderCardFull order={order} />;
};
