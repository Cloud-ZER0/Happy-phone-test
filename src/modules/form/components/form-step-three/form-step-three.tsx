"use client";

// eslint-disable-next-line import-x/no-unresolved
import { zodResolver } from "@hookform/resolvers/zod";
import { clsx } from "clsx";
import React from "react";
import { FormProvider, useForm } from "react-hook-form";

import { FormCheckboxInput } from "@/modules/shared/components/form/form-checkbox-input";
import { FormControlProvider } from "@/modules/shared/components/form/form-control/provider";

import { useFormContext } from "../../context/form-context.hooks";
import { thirdStepFormSchema } from "../../schemas";
import { getThirdStepErrorMessage } from "../../schemas/error-messages";
import { FormControls } from "../form-controls/form-controls";
import { PreviousUserData } from "../previos-user-data/previous-user-data";

export interface FormStepOne {
	className?: string;
}

export const FormStepThree = ({ className }: FormStepOne) => {
	const { form, submitForm, clearForm } = useFormContext();

	const thirdStepForm = useForm({
		mode: "onSubmit",
		resolver: zodResolver(thirdStepFormSchema),
	});

	const handleFormSubmit = submitForm((value) => {
		if (value?.firstStep != undefined && value.secondStep != undefined) {
			console.log("@@@", value);
		}
	});

	const onSubmit = thirdStepForm.handleSubmit(() => {
		handleFormSubmit();
		clearForm();
	});

	return (
		<FormProvider {...thirdStepForm}>
			<FormControlProvider getErrorMessage={getThirdStepErrorMessage}>
				<form
					className={clsx("w-full flex flex-col gap-6", className)}
					// eslint-disable-next-line @typescript-eslint/no-misused-promises
					onSubmit={onSubmit}
				>
					<h1 className="text-black text-4xl">Подтверждение</h1>
					<div className="flex flex-col gap-4">
						<PreviousUserData data={form?.firstStep} />
						<PreviousUserData data={form?.secondStep} />
						<FormCheckboxInput
							label={{
								title: "Я согласен с условиями использования",
							}}
							name="agreement"
						/>
					</div>

					<FormControls nextBtnText="Отправить" />
				</form>
			</FormControlProvider>
		</FormProvider>
	);
};
