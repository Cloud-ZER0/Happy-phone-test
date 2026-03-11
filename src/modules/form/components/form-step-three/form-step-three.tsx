"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { clsx } from "clsx";
import { useRouter } from "next/navigation";
import React from "react";
import { FormProvider, useForm } from "react-hook-form";

import { addOrderToStorage } from "@/modules/api/order/add-order-to-storage";
import { FormCheckboxInput } from "@/modules/shared/components/form/form-checkbox-input";
import { FormControlProvider } from "@/modules/shared/components/form/form-control/provider";

import { useFormContext } from "../../context/form-context.hooks";
import { getThirdStepErrorMessage } from "../../errors/messages/third-step-error-messages";
import { thirdStepFormSchema } from "../../schemas/form-third-step.schema";
import { type FormOptions } from "../../types";
import { createOrder } from "../../utils/create-order";
import { FormControls } from "../form-controls/form-controls";
import { PreviousUserData } from "../previos-user-data/previous-user-data";

export interface FormStepThree {
	className?: string;
}

export const FormStepThree = ({ className }: FormStepThree) => {
	const router = useRouter();
	const { form, submitForm, clearForm } = useFormContext();

	const thirdStepForm = useForm({
		mode: "onSubmit",
		resolver: zodResolver(thirdStepFormSchema),
	});

	const handleFormSubmit = submitForm((value) => {
		if (value?.firstStep != undefined && value.secondStep != undefined) {
			const order = createOrder(value as Required<FormOptions>);
			addOrderToStorage(order);
			router.push("/orders");
		}
	});

	const onSubmit = thirdStepForm.handleSubmit(() => {
		handleFormSubmit();
		clearForm();
	});

	const combinedData =
		form?.firstStep != undefined && form.secondStep != undefined
			? { ...form.firstStep, ...form.secondStep }
			: undefined;

	return (
		<FormProvider {...thirdStepForm}>
			<FormControlProvider getErrorMessage={getThirdStepErrorMessage}>
				<form
					className={clsx("w-full flex flex-col gap-6", className)}
					// eslint-disable-next-line @typescript-eslint/no-misused-promises
					onSubmit={onSubmit}
				>
					<h1 className="text-black text-[24px]">Подтверждение</h1>
					<div className="flex flex-col gap-4">
						<PreviousUserData data={combinedData} />
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
