"use client";

import { useMemo, useState, type PropsWithChildren } from "react";

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

	// Не имеет смысла оборачивать в useCalback, функция лежит
	// в объекте, который зависит от form, любое обновление form
	// в итоге будет убивать стабильную ссылку на эти функции

	// eslint-disable-next-line react-hooks/exhaustive-deps
	const clearForm: FormContextOptions["clearForm"] = () => {
		setForm(undefined);
		localStorage.removeItem(FORM_STORAGE_KEY);
	};

	// eslint-disable-next-line react-hooks/exhaustive-deps
	const updateForm: FormContextOptions["updateForm"] = ({ formData }) => {
		setForm((form) => {
			const currentForm = { ...form, ...formData };
			localStorage.setItem(FORM_STORAGE_KEY, JSON.stringify(currentForm));
			return currentForm;
		});
	};

	// eslint-disable-next-line react-hooks/exhaustive-deps
	const submitForm: FormContextOptions["submitForm"] = (callback) => {
		return () => {
			callback(form);
		};
	};

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
