"use client";

import { clsx } from "clsx";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";

import { Button } from "@/modules/shared/components/controls/button";
import { formatPhoneNumber } from "@/modules/shared/utils/format-phone-number";

import { LOCAL_STORAGE_ORDERS_KEY } from "../../constants";
import { type OrderType } from "../../types";

export interface OrderCardFull {
	order: OrderType;
	orders: OrderType[];
	className?: string;
}

export const OrderCardFull = ({ order, orders, className }: OrderCardFull) => {
	const router = useRouter();

	const handleRemoveOrder = () => {
		localStorage.setItem(
			LOCAL_STORAGE_ORDERS_KEY,
			JSON.stringify(orders.filter(({ id }) => id !== order.id)),
		);
		router.push("/orders");
	};

	return (
		<div
			className={clsx(
				"p-5 rounded-3xl bg-white border border-black flex flex-col gap-6",
				className,
			)}
		>
			<Link
				href={`/orders/${order.id}`}
				className="flex flex-col gap-3 text text-xl"
			>
				<p>
					{order.from}
					{"->"}
					{order.to}
				</p>
				<p>Имя отправителя: {order.fromName}</p>
				<p>Имя получателя: {order.toName}</p>
				<p>Тип груза: {order.cargoType}</p>
				<p>Дата создания: {order.createdAt}</p>
				<p>Статус: {order.status === "active" ? "Активный" : "Отменен"}</p>
				<p>Номер телефона: {formatPhoneNumber(order.phone)}</p>
				<p>Вес: {order.weight} Кг</p>
			</Link>
			<Button onClick={handleRemoveOrder}>Удалить</Button>
		</div>
	);
};
