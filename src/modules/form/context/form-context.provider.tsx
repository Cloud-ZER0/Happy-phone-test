"use client";

import { useCallback, useMemo, useState, type PropsWithChildren } from "react";

import { FORM_STORAGE_KEY } from "../constanst";
import { type FormOptions } from "../schemas";
import { FormContext } from "./form-context";
import { type FormContextOptions } from "./form-context.types";

export const FormProvider = ({ children }: PropsWithChildren) => {
	const [form, setForm] = useState<FormOptions | undefined>(() => {
		const formValue = localStorage.getItem(FORM_STORAGE_KEY);
		return formValue != undefined
			? (JSON.parse(formValue) as FormOptions)
			: undefined;
	});

	const clearForm: FormContextOptions["clearForm"] = useCallback(() => {
		setForm(undefined);
		localStorage.removeItem(FORM_STORAGE_KEY);
	}, []);

	const updateForm: FormContextOptions["updateForm"] = useCallback(
		({ formData }) => {
			setForm((form) => {
				const currentForm = { ...form, ...formData };
				localStorage.setItem(FORM_STORAGE_KEY, JSON.stringify(currentForm));
				return currentForm;
			});
		},
		[],
	);

	const submitForm: FormContextOptions["submitForm"] = useCallback(
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
