import { createContext } from "react";

import { type FormContextOptions } from "./form-context.types";

export const FORM_CONTEXT_INITIAL_VALUE: FormContextOptions = {
	form: undefined,
	clearForm() {
		/* empty */
	},
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	submitForm(_callback) {
		// eslint-disable-next-line unicorn/consistent-function-scoping
		return () => {
			/* empty */
		};
	},

	updateForm() {
		/* empty */
	},
};

export const FormContext = createContext<FormContextOptions>(
	FORM_CONTEXT_INITIAL_VALUE,
);
