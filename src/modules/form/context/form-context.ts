import { createContext } from "react";

import { FORM_CONTEXT_INITIAL_VALUE } from "../constanst";
import { type FormContextOptions } from "./form-context.types";

export const FormContext = createContext<FormContextOptions>(
	FORM_CONTEXT_INITIAL_VALUE,
);
