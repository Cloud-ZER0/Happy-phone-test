import { type FormOptions } from "@/modules/form/types";

import { FORM_STORAGE_KEY } from "../constants";
import { setLocalStorageItem } from "../storage/safe-storage";
import { formOptionsSchema } from "../storage/storage.schemas";

export const updateFormStorage = (currentForm: Partial<FormOptions>): void => {
	// валидируем и нормализуем перед записью
	const parsed = formOptionsSchema.partial().safeParse(currentForm);
	if (!parsed.success) {
		return;
	}

	setLocalStorageItem(FORM_STORAGE_KEY, parsed.data);
};
