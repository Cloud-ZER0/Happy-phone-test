"use client";

// eslint-disable-next-line import-x/no-unresolved
import { zodResolver } from "@hookform/resolvers/zod";
import { clsx } from "clsx";
import React from "react";
import { FormProvider, useForm } from "react-hook-form";

import { FieldLabel } from "@/modules/shared/components/form/field-label";
import { FormControlProvider } from "@/modules/shared/components/form/form-control/provider";
import { FormInput } from "@/modules/shared/components/form/form-input";
import { FormSelect } from "@/modules/shared/components/form/form-select/form-select";

import { LABELS } from "../../constanst";
import { useFormContext } from "../../context/form-context.hooks";
import { secondStepFormSchema } from "../../schemas";
import { getSecondStepErrorMessage } from "../../schemas/error-messages";
import { FormSecondStepErrorsCodes } from "../../schemas/errors";
import { FormControls } from "../form-controls/form-controls";

export interface FormStepTwo {
	className?: string;
}

export const FormStepTwo = ({ className }: FormStepTwo) => {
	const { updateForm, form } = useFormContext();

	const secondStepForm = useForm({
		mode: "onSubmit",
		resolver: zodResolver(secondStepFormSchema),
		defaultValues:
			form?.secondStep != undefined
				? {
						to: form.secondStep.to,
						cargoType: form.secondStep.cargoType,
						weight: form.secondStep.weight,
						reciverName: form.secondStep.reciverName,
					}
				: undefined,
	});

	const onSubmit = secondStepForm.handleSubmit((values) => {
		const from = form?.firstStep?.from ?? "";

		if (from === values.to) {
			secondStepForm.setError("to", {
				message: getSecondStepErrorMessage(
					FormSecondStepErrorsCodes.to.matches,
				),
			});
			return;
		}

		updateForm({ formData: { secondStep: { ...values }, currentStep: "3" } });
	});

	return (
		<FormProvider {...secondStepForm}>
			<FormControlProvider getErrorMessage={getSecondStepErrorMessage}>
				<form
					className={clsx("w-full flex flex-col gap-6", className)}
					// eslint-disable-next-line @typescript-eslint/no-misused-promises
					onSubmit={onSubmit}
				>
					<h1 className="text-black text-4xl">Sender info</h1>
					<div className="flex flex-col gap-4">
						<FieldLabel label={LABELS.reciverName}>
							<FormInput name="reciverName" type="text" />
						</FieldLabel>
						<FieldLabel label={LABELS.to}>
							<FormInput name="to" type="text" />
						</FieldLabel>
						<FieldLabel label={LABELS.cargoType}>
							<FormSelect name="cargoType">
								<option value="document">Документ</option>
								<option value="fragile">Хрупкое</option>
								<option value="regular">Обычное</option>
							</FormSelect>
						</FieldLabel>
						<FieldLabel label={LABELS.weight}>
							<FormInput name="weight" type="text" />
						</FieldLabel>
					</div>

					<FormControls />
				</form>
			</FormControlProvider>
		</FormProvider>
	);
};
