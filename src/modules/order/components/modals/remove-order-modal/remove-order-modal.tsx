import dynamic from "next/dynamic";
import React, { useRef } from "react";
import { useOnClickOutside } from "usehooks-ts";

import { Button } from "@/modules/shared/components/controls/button";
import { Modal } from "@/modules/shared/components/overlays/modal";

import { useRemoveOrderModalContext } from "./context";

const RemoveModalUl = dynamic(
	() => import("./remove-order-modal.ui").then((mod) => mod.RemoveOrderModalUi),
	{ ssr: false },
);

export interface RemoveOrderModal {
	id: string;
	onRemove: () => void;
}

export const RemoveOrderModal = ({ id, ...props }: RemoveOrderModal) => {
	const { closeModal, isOpen, openModal } = useRemoveOrderModalContext();

	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	const modalRef = useRef<any>(null);

	useOnClickOutside(modalRef, closeModal);

	const onRemove = () => {
		props.onRemove();
		closeModal();
	};

	return (
		<>
			<Button onClick={openModal}>Удалить</Button>
			{isOpen && (
				<Modal closeModal={closeModal}>
					<RemoveModalUl
						ref={modalRef}
						closeModal={closeModal}
						id={id}
						onRemove={onRemove}
					/>
				</Modal>
			)}
		</>
	);
};
