"use client";

import { clsx } from "clsx";
import React, { type PropsWithChildren } from "react";

import { useFormContext } from "../../context/form-context.hooks";
import { type FormOptions } from "../../types";

const getStepStyles = ({
	currentStep,
	step,
}: {
	currentStep: number;
	step: FormOptions["currentStep"];
}): string => {
	const stepNumber = Number.parseInt(step);

	if (currentStep >= stepNumber) {
		return "bg-green-400";
	}
	return "bg-white";
};

interface ProgressBarStepProps {
	className?: string;
}

const ProgressBarStep = ({
	children,
	className,
}: PropsWithChildren<ProgressBarStepProps>) => {
	return (
		<div
			className={`w-full p-2 flex justify-center items-center  ${className}`}
		>
			<span className="text text-[16px] text-black">{children}</span>
		</div>
	);
};

export interface ProgressBarProps {
	className?: string;
}

export const ProgressBar = ({ className }: ProgressBarProps) => {
	const { form } = useFormContext();

	const currentStep = Number.parseInt(form?.currentStep ?? "1");

	return (
		<div
			className={clsx(
				"w-full grid grid-cols-3 rounded-3xl border border-[#F3F4FA] overflow-hidden",
				className,
			)}
		>
			<ProgressBarStep className={getStepStyles({ currentStep, step: "1" })}>
				Шаг 1
			</ProgressBarStep>
			<ProgressBarStep className={getStepStyles({ currentStep, step: "2" })}>
				Шаг 2
			</ProgressBarStep>
			<ProgressBarStep className={getStepStyles({ currentStep, step: "3" })}>
				Шаг 3
			</ProgressBarStep>
		</div>
	);
};
