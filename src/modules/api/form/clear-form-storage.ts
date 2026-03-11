import { FORM_STORAGE_KEY } from "../constants";

export const clearFormStorage = (): void => {
	// eslint-disable-next-line unicorn/prefer-global-this
	if (typeof window !== "undefined") {
		localStorage.removeItem(FORM_STORAGE_KEY);
	}
};
