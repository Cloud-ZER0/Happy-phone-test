import { type FormOptions } from "@/modules/form/types";

import { FORM_STORAGE_KEY } from "../constants";

export const getFormStorage = (): FormOptions | undefined => {
	const formValue = localStorage.getItem(FORM_STORAGE_KEY);
	return formValue != undefined
		? (JSON.parse(formValue) as FormOptions)
		: undefined;
};
