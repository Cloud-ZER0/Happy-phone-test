"use client";

// eslint-disable-next-line import-x/no-unresolved
import { zodResolver } from "@hookform/resolvers/zod";
import { clsx } from "clsx";
import React from "react";
import { FormProvider, useForm } from "react-hook-form";

import { FieldLabel } from "@/modules/shared/components/form/field-label";
import { FormControlProvider } from "@/modules/shared/components/form/form-control/provider";
import { FormInput } from "@/modules/shared/components/form/form-input";

import { formatPhoneNumber } from "../../../shared/utils/format-phone-number";
import { LABELS } from "../../constants";
import { useFormContext } from "../../context/form-context.hooks";
import { getFirstStepErrorMessage } from "../../errors/messages/first-step-error-messages";
import { firstStepFormSchema } from "../../schemas/form-first-step.schema";
import { FormControls } from "../form-controls/form-controls";

export interface FormStepOne {
	className?: string;
}

export const FormStepOne = ({ className }: FormStepOne) => {
	const { updateForm, form } = useFormContext();

	const firstStepForm = useForm({
		mode: "onSubmit",
		resolver: zodResolver(firstStepFormSchema),
		defaultValues:
			form?.firstStep != undefined
				? {
						senderCity: form.firstStep.senderCity,
						senderName: form.firstStep.senderName,
						phone: formatPhoneNumber(form.firstStep.phone),
					}
				: undefined,
	});

	const onSubmit = firstStepForm.handleSubmit((values) => {
		updateForm({ formData: { firstStep: { ...values }, currentStep: "2" } });
	});

	return (
		<FormProvider {...firstStepForm}>
			<FormControlProvider getErrorMessage={getFirstStepErrorMessage}>
				<form
					className={clsx("w-full flex flex-col gap-4", className)}
					// eslint-disable-next-line @typescript-eslint/no-misused-promises
					onSubmit={onSubmit}
				>
					<h1 className="text-black text-[24px]">Отправитель</h1>
					<div className="flex flex-col gap-4">
						<FieldLabel label={LABELS.senderName}>
							<FormInput name="name" type="text" />
						</FieldLabel>
						<FieldLabel label={LABELS.phone}>
							<FormInput
								name="phone"
								type="tel"
								placeholder="+7 (___) ___-__-__"
								isPhone
							/>
						</FieldLabel>
						<FieldLabel label={LABELS.senderCity}>
							<FormInput name="from" type="text" />
						</FieldLabel>
					</div>

					<FormControls />
				</form>
			</FormControlProvider>
		</FormProvider>
	);
};
