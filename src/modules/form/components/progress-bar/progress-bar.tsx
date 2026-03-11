"use client";

import React from "react";

import { useFormContext } from "../../context/form-context.hooks";
import { type FormOptions } from "../../schemas";

const getStepStyles = ({
	currentStep,
	step,
}: {
	currentStep: number;
	step: FormOptions["currentStep"];
}): string => {
	const stepNumber = Number.parseInt(step);
	if (currentStep === stepNumber) {
		return "bg-green-400";
	}
	if (currentStep > stepNumber) {
		return "bg-green-700";
	}
	return "bg-white";
};

export const ProgressBar = () => {
	const { form } = useFormContext();

	const currentStep = Number.parseInt(form?.currentStep ?? "1");

	return (
		<div className="w-full grid grid-cols-3 border-t-[black] border-t border-solid border-b border-b-[black]">
			<div
				className={`w-full p-4 border-l border-l-[black] ${getStepStyles({ currentStep, step: "1" })}`}
			>
				<span className="text text-xl text-black">Отправитель</span>
			</div>
			<div
				className={`w-full border-l border-l-[black] p-4 ${getStepStyles({ currentStep, step: "2" })}`}
			>
				<span className="text text-xl text-black">Получатель и посылка</span>
			</div>
			<div
				className={`w-full border-l border-l-[black] border-r border-r-[black] p-4 ${getStepStyles({ currentStep, step: "3" })}`}
			>
				<span className="text text-xl text-black">Подтверждение</span>
			</div>
		</div>
	);
};
