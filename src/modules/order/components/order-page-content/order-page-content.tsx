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
			<div className="flex w-full flex-col gap-3 text-center justify-center">
				<h1 className="text text-center text-4xl ">
					Заказ с id {id} не найден
				</h1>
				<Link className="underline" href="/">
					Назад
				</Link>
			</div>
		);
	}

	return (
		<div className="w-full flex flex-col gap-4 items-center text-center">
			<OrderCardFull order={order} />
			<Link className="underline" href="/">
				Назад
			</Link>
		</div>
	);
};
