import { type FormOptions } from "@/modules/form/types";

import { FORM_STORAGE_KEY } from "../constants";

export const updateFormStorage = (currentForm: Partial<FormOptions>): void => {
	// eslint-disable-next-line unicorn/prefer-global-this
	if (typeof window !== "undefined") {
		localStorage.setItem(FORM_STORAGE_KEY, JSON.stringify(currentForm));
	}
};
