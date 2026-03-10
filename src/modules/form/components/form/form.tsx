"use client";

import { clsx } from "clsx";
import React from "react";

import { useFormContext } from "../../context/form-context.hooks";
import { getComponentByStep } from "../../utils/get-component-by-step";

export interface FormProps {
	className?: string;
}

export const Form = ({ className }: FormProps) => {
	const { form } = useFormContext();

	return (
		<div
			className={clsx(
				"w-full max-w-[80%] p-6 bg-amber-100 rounded-4xl border border-black",
				className,
			)}
		>
			{getComponentByStep({ formStep: form?.currentStep })}
		</div>
	);
};
