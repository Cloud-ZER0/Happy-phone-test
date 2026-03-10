/* eslint-disable @typescript-eslint/no-unused-vars */
import { type FormContextOptions } from "../context/form-context.types";
import {
	type FirtStepFormOptions,
	type SecondStepFormOptions,
} from "../schemas";

export const FORM_STORAGE_KEY = "form";

export const FORM_CONTEXT_INITIAL_VALUE: FormContextOptions = {
	form: undefined,
	clearForm() {
		/* empty */
	},
	submitForm(callback) {
		// eslint-disable-next-line unicorn/consistent-function-scoping
		return () => {
			/* empty */
		};
	},
	updateForm({ formData }) {
		/* empty */
	},
};

type CommonFormOptions = FirtStepFormOptions & SecondStepFormOptions;

export const LABELS: Record<keyof CommonFormOptions, string> = {
	cargoType: "Тип груза",
	from: "Город отправления",
	to: "Город назначения",
	name: "Имя",
	phone: "Телефон",
	reciverName: "Имя получателя",
	weight: "Вес, кг",
};
