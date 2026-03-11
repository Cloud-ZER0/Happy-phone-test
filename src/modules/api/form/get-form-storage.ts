import { type FormOptions } from "@/modules/form/types";

import { FORM_STORAGE_KEY } from "../constants";

export const getFormStorage = (): FormOptions | undefined => {
	// eslint-disable-next-line unicorn/prefer-global-this
	if (typeof window !== "undefined") {
		const formValue = localStorage.getItem(FORM_STORAGE_KEY);
		return formValue != undefined
			? (JSON.parse(formValue) as FormOptions)
			: undefined;
	}
	return;
};
