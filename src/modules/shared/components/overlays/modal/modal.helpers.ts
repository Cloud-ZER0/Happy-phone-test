"use client";

import constate from "constate";
import { useCallback, useState } from "react";

export function useModalData() {
	const [isOpen, setIsOpen] = useState(false);

	const openModal = useCallback(() => {
		setIsOpen(true);
	}, []);

	const closeModal = useCallback(() => {
		setIsOpen(false);
	}, []);

	return {
		isOpen,
		setIsOpen,
		openModal,
		closeModal,
	};
}

export function createModalContextProvider() {
	const [ModalProvider, useModalContext] = constate(useModalData);

	return [ModalProvider, useModalContext] as const;
}
