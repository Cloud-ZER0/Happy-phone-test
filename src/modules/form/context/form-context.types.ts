import { type FormOptions } from "../schemas";

export type PartialFormOptions = Partial<FormOptions> &
	Required<Pick<FormOptions, "currentStep">>;

export interface FormContextOptions {
	form?: FormOptions;
	updateForm: ({ formData }: { formData: PartialFormOptions }) => void;
	submitForm: (callback: (formData?: FormOptions) => void) => () => void;
	clearForm: () => void;
}
