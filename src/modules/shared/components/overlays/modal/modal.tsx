"use client";

import { clsx } from "clsx";
import React, { useEffect, useRef, type PropsWithChildren } from "react";
import { useOnClickOutside } from "usehooks-ts";

export interface ModalProps {
	closeModal: () => void;
	className?: string;
}

export const Modal = ({
	closeModal,
	children,
	className,
}: PropsWithChildren<ModalProps>) => {
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	const modalRef = useRef<any>(null);

	useOnClickOutside(modalRef, closeModal);

	useEffect(() => {
		const html = document.querySelector("html");
		if (html != undefined) {
			html.style.marginRight = `${
				window.innerWidth - document.documentElement.clientWidth
			}px`;
			html.style.overflow = "hidden";
		}
		document.addEventListener("keydown", closeModal);

		return () => {
			if (html != undefined) {
				html.style.marginRight = "0px";
				html.style.overflow = "unset";
				document.removeEventListener("keydown", closeModal);
			}
		};
	}, [closeModal]);

	return (
		<div
			className={clsx(
				"absolute z-50 inset-0 w-full h-full flex justify-center items-center p-6 bg-[rgba(0,0,0,0.7)]",
				className,
			)}
			ref={modalRef}
		>
			{children}
		</div>
	);
};
