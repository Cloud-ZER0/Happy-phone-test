"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { clsx } from "clsx";
import { useRouter } from "next/navigation";
import React from "react";
import { FormProvider, useForm } from "react-hook-form";

import { LOCAL_STORAGE_ORDERS_KEY } from "@/modules/order/constants";
import { type OrderType } from "@/modules/order/types";
import { FormCheckboxInput } from "@/modules/shared/components/form/form-checkbox-input";
import { FormControlProvider } from "@/modules/shared/components/form/form-control/provider";

import { useFormContext } from "../../context/form-context.hooks";
import { thirdStepFormSchema, type FormOptions } from "../../schemas";
import { getThirdStepErrorMessage } from "../../schemas/error-messages";
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
			const prevOrders = localStorage.getItem(LOCAL_STORAGE_ORDERS_KEY);
			if (prevOrders != undefined) {
				localStorage.setItem(
					LOCAL_STORAGE_ORDERS_KEY,
					JSON.stringify([...(JSON.parse(prevOrders) as OrderType[]), order]),
				);
			} else {
				localStorage.setItem(LOCAL_STORAGE_ORDERS_KEY, JSON.stringify([order]));
			}
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
					<h1 className="text-black text-4xl">Подтверждение</h1>
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
