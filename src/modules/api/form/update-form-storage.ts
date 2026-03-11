import { type FormOptions } from "@/modules/form/types";

import { FORM_STORAGE_KEY } from "../constants";

export const updateFormStorage = (currentForm: Partial<FormOptions>): void => {
	localStorage.setItem(FORM_STORAGE_KEY, JSON.stringify(currentForm));
};
