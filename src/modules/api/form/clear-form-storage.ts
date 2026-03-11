import { FORM_STORAGE_KEY } from "../constants";

export const clearFormStorage = (): void => {
	localStorage.removeItem(FORM_STORAGE_KEY);
};
