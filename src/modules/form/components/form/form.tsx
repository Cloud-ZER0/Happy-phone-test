"use client";

import { clsx } from "clsx";
import React from "react";

import { useFormContext } from "../../context/form-context.hooks";
import { getComponentByStep } from "../../utils/get-component-by-step";
import { ProgressBar } from "../progress-bar";

export interface FormProps {
	className?: string;
}

export const Form = ({ className }: FormProps) => {
	const { form } = useFormContext();

	return (
		<div
			className={clsx(
				"w-full max-w-155 p-6 bg-white rounded-4xl border border-[#F3F4FA] flex flex-col gap-7",
				className,
			)}
		>
			<ProgressBar />
			{getComponentByStep(form?.currentStep)}
		</div>
	);
};
