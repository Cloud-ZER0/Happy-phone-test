import { type FormOptions } from "@/modules/form/types";

import { FORM_STORAGE_KEY } from "../constants";
import { getLocalStorageItem } from "../storage/safe-storage";
import { formOptionsSchema } from "../storage/storage.schemas";

export const getFormStorage = (): FormOptions | undefined => {
	return getLocalStorageItem(FORM_STORAGE_KEY, formOptionsSchema);
};
