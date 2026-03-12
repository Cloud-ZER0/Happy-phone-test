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
	type UpdateForm,
	type WithForm,
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

	const withForm: WithForm = useCallback(
		(callback) => {
			if (form == undefined) {
				return;
			}

			callback(form);
		},
		[form],
	);

	const value: FormContextOptions = useMemo(() => {
		return {
			form,
			clearForm,
			withForm,
			updateForm,
		};
	}, [form, clearForm, updateForm, withForm]);

	return <FormContext.Provider value={value}>{children}</FormContext.Provider>;
};
