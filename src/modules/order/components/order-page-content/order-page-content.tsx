"use client";

import Link from "next/link";
import React from "react";

import { LOCAL_STORAGE_ORDERS_KEY } from "../../constants";
import { type OrderType } from "../../types";
import { OrderCardFull } from "../order-card-full";

export interface OrderPageContent {
	id: string;
}

export const OrderPageContent = ({ id }: OrderPageContent) => {
	const rawOrders = localStorage.getItem(LOCAL_STORAGE_ORDERS_KEY);

	if (rawOrders == undefined) {
		return (
			<>
				<h1>Заказы не найдены</h1>
				<Link href="/">Назад</Link>
			</>
		);
	}

	const orders = JSON.parse(rawOrders) as OrderType[];

	const order = orders.find((order) => order.id === id);

	if (order == undefined) {
		return (
			<>
				<h1>Заказ с id {id} не найден</h1>
				<Link href="/">Назад</Link>
			</>
		);
	}

	return <OrderCardFull order={order} orders={orders} />;
};
