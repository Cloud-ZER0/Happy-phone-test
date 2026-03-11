"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { clsx } from "clsx";
import React from "react";
import { FormProvider, useForm } from "react-hook-form";

import { FieldLabel } from "@/modules/shared/components/form/field-label";
import { FormControlProvider } from "@/modules/shared/components/form/form-control/provider";
import { FormInput } from "@/modules/shared/components/form/form-input";
import { FormSelect } from "@/modules/shared/components/form/form-select/form-select";

import { LABELS } from "../../constants";
import { useFormContext } from "../../context/form-context.hooks";
import { FormSecondStepErrorsCodes } from "../../errors/codes/second-step-error-codes";
import { getSecondStepErrorMessage } from "../../errors/messages/second-step-error-messages";
import { secondStepFormSchema } from "../../schemas/form-second-step.schema";
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
						recipientCity: form.secondStep.recipientCity,
						cargoType: form.secondStep.cargoType,
						weight: form.secondStep.weight,
						recipientName: form.secondStep.recipientName,
					}
				: {
						cargoType: "",
					},
	});

	const onSubmit = secondStepForm.handleSubmit((values) => {
		const from = form?.firstStep?.senderCity ?? "";

		if (from === values.recipientCity) {
			secondStepForm.setError("recipientCity", {
				message: getSecondStepErrorMessage(
					FormSecondStepErrorsCodes.recipientCity.matches,
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
					<h1 className="text-black text-[24px]">Получатель и посылка</h1>
					<div className="flex flex-col gap-4">
						<FieldLabel label={LABELS.recipientName}>
							<FormInput name="recipientName" type="text" />
						</FieldLabel>
						<FieldLabel label={LABELS.recipientCity}>
							<FormInput name="recipientCity" type="text" />
						</FieldLabel>
						<FieldLabel label={LABELS.cargoType}>
							<FormSelect name="cargoType">
								<option value="" disabled>
									Выберите тип груза
								</option>
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
