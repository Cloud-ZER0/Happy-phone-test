import { FORM_STORAGE_KEY } from "../constants";
import { removeLocalStorageItem } from "../storage/safe-storage";

export const clearFormStorage = (): void => {
	removeLocalStorageItem(FORM_STORAGE_KEY);
};
