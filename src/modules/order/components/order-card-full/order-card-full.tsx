"use client";

import { clsx } from "clsx";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";

import { removOrderById } from "@/modules/api/order/remove-order-by-id";
import { formatPhoneNumber } from "@/modules/shared/utils/format-phone-number";

import { type OrderType } from "../../types";
import { RemoveOrderModal } from "../modals/remove-order-modal";

export interface OrderCardFullProps {
	order: OrderType;
	className?: string;
}

export const OrderCardFull = ({ order, className }: OrderCardFullProps) => {
	const router = useRouter();

	const handleRemoveOrder = () => {
		removOrderById(order.id);
		router.push("/orders");
	};

	return (
		<div
			className={clsx(
				"p-5 rounded-3xl bg-white border border-black flex flex-col gap-6 w-full max-w-112.5",
				className,
			)}
		>
			<Link
				href={`/orders/${order.id}`}
				className="flex flex-col gap-3 text text-xl"
			>
				<p>
					{order.senderCity}
					{"->"}
					{order.recipientCity}
				</p>
				<p>Имя отправителя: {order.senderName}</p>
				<p>Имя получателя: {order.recipientName}</p>
				<p>Тип груза: {order.cargoType}</p>
				<p>Дата создания: {order.createdAt}</p>
				<p>Статус: {order.status === "active" ? "Активный" : "Отменен"}</p>
				<p>Номер телефона: {formatPhoneNumber(order.phone)}</p>
				<p>Вес: {order.weight} Кг</p>
			</Link>
			<RemoveOrderModal id={order.id} onRemove={handleRemoveOrder} />
		</div>
	);
};
