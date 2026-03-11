"use client";

import React, { type RefObject } from "react";

import { Button } from "@/modules/shared/components/controls/button";

export interface RemoveOrderModalUi {
	onRemove: () => void;
	closeModal: () => void;
	id: string;
	ref: RefObject<HTMLDivElement>;
}

export const RemoveOrderModalUi = ({
	onRemove,
	closeModal,
	id,
	ref,
}: RemoveOrderModalUi) => {
	return (
		<div
			ref={ref}
			className="w-full max-w-87.5 p-5 rounded-3xl bg-white border border-black flex flex-col gap-3"
		>
			<p>Вы уверены что хотите удалить заявку ?</p>
			<p>id: {id} </p>
			<div className="w-full flex gap-2.5 items-center">
				<Button className="w-full" onClick={closeModal}>
					Закрыть
				</Button>
				<Button className="w-full" onClick={onRemove}>
					Удалить
				</Button>
			</div>
		</div>
	);
};
