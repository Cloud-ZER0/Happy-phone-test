"use client";

import { clsx } from "clsx";
import React from "react";

import { Button } from "@/modules/shared/components/controls/button";

import { useFormContext } from "../../context/form-context.hooks";

interface FormControlsProps {
	className?: string;
	nextBtnText?: string;
}

export const FormControls = ({
	className,
	nextBtnText = "Далее",
}: FormControlsProps) => {
	const { updateForm, form } = useFormContext();

	const handlePrevClick = () => {
		if (form === undefined || form.currentStep === "1") {
			return;
		}

		updateForm({
			formData: { currentStep: form.currentStep === "2" ? "1" : "2" },
		});
	};

	return (
		<div className={clsx("flex justify-between items-center", className)}>
			<Button
				onClick={handlePrevClick}
				type="button"
				disabled={form?.currentStep === "1"}
				className="w-fit"
			>
				Назад
			</Button>
			<Button type="submit" className="w-fit">
				{nextBtnText}
			</Button>
		</div>
	);
};
