import { clsx } from "clsx";
import Link from "next/link";
import React, { type PropsWithChildren } from "react";

import { type OrderType } from "../../types";

export interface OrderCardShort extends Omit<
	OrderType,
	"toName" | "weight" | "phone"
> {
	className?: string;
}

export const OrderCardShort = ({
	cargoType,
	createdAt,
	from,
	fromName,
	id,
	status,
	to,
	children,
	className,
}: PropsWithChildren<OrderCardShort>) => {
	return (
		<div
			className={clsx(
				"p-5 rounded-3xl bg-white border border-black flex flex-col gap-6",
				className,
			)}
		>
			<Link href={`/orders/${id}`} className="flex flex-col gap-3 text text-xl">
				<p>
					{from}
					{"->"}
					{to}
				</p>
				<p>Имя отправителя: {fromName}</p>
				<p>Тип груза: {cargoType}</p>
				<p>Дата создания: {createdAt}</p>
				<p>Статус: {status === "active" ? "Активный" : "Отменен"}</p>
			</Link>
			{children}
		</div>
	);
};
