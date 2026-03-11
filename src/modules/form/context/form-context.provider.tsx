"use client";

import { useCallback, useMemo, useState, type PropsWithChildren } from "react";

import { clearFormStorage } from "@/modules/api/form/clear-form-storage";
import { getFormStorage } from "@/modules/api/form/get-form-storage";
import { updateFormStorage } from "@/modules/api/form/update-form-storage";

import { type FormOptions } from "../types";
import { FormContext } from "./form-context";
import {
	type ClearForm,
	type FormContextOptions,
	type SubmitForm,
	type UpdateForm,
} from "./form-context.types";

export const FormProvider = ({ children }: PropsWithChildren) => {
	const [form, setForm] = useState<FormOptions | undefined>(() =>
		getFormStorage(),
	);

	const clearForm: ClearForm = useCallback(() => {
		setForm(undefined);
		clearFormStorage();
	}, []);

	const updateForm: UpdateForm = useCallback(({ formData }) => {
		setForm((form) => {
			const currentForm = { ...form, ...formData };
			updateFormStorage(currentForm);
			return currentForm;
		});
	}, []);

	const submitForm: SubmitForm = useCallback(
		(callback) => {
			return () => {
				callback(form);
			};
		},
		[form],
	);

	const value: FormContextOptions = useMemo(() => {
		return {
			form,
			clearForm,
			submitForm,
			updateForm,
		};
	}, [form, clearForm, updateForm, submitForm]);

	return <FormContext.Provider value={value}>{children}</FormContext.Provider>;
};
