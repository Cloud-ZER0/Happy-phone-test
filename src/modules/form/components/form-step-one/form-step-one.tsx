"use client";

// eslint-disable-next-line import-x/no-unresolved
import { zodResolver } from "@hookform/resolvers/zod";
import { clsx } from "clsx";
import React from "react";
import { FormProvider, useForm } from "react-hook-form";

import { FieldLabel } from "@/modules/shared/components/form/field-label";
import { FormControlProvider } from "@/modules/shared/components/form/form-control/provider";
import { FormInput } from "@/modules/shared/components/form/form-input";

import { LABELS } from "../../constanst";
import { useFormContext } from "../../context/form-context.hooks";
import { firstStepFormSchema } from "../../schemas";
import { getFirstStepErrorMessage } from "../../schemas/error-messages";
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
						from: form.firstStep.from,
						name: form.firstStep.name,
						phone: form.firstStep.phone,
					}
				: undefined,
	});

	const onSubmit = firstStepForm.handleSubmit((values) => {
		console.log("test");
		updateForm({ formData: { firstStep: { ...values }, currentStep: "2" } });
	});

	return (
		<FormProvider {...firstStepForm}>
			<FormControlProvider getErrorMessage={getFirstStepErrorMessage}>
				<form
					className={clsx("w-full flex flex-col gap-6", className)}
					// eslint-disable-next-line @typescript-eslint/no-misused-promises
					onSubmit={onSubmit}
				>
					<h1 className="text-black text-4xl">Sender info</h1>
					<div className="flex flex-col gap-4">
						<FieldLabel label={LABELS.name}>
							<FormInput name="name" type="text" />
						</FieldLabel>
						<FieldLabel label={LABELS.phone}>
							<FormInput name="phone" type="text" />
						</FieldLabel>
						<FieldLabel label={LABELS.from}>
							<FormInput name="from" type="text" />
						</FieldLabel>
					</div>

					<FormControls />
				</form>
			</FormControlProvider>
		</FormProvider>
	);
};
