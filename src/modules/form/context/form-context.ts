import { createContext } from "react";

import { type FormContextOptions } from "./form-context.types";

export const FORM_CONTEXT_INITIAL_VALUE: FormContextOptions = {
	form: undefined,
	clearForm() {
		/* empty */
	},
	withForm() {
		/* empty */
	},

	updateForm() {
		/* empty */
	},
};

export const FormContext = createContext<FormContextOptions>(
	FORM_CONTEXT_INITIAL_VALUE,
);
