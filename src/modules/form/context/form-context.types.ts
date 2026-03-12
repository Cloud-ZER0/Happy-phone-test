import { type FormOptions } from "../types";

export type UpdateForm = ({
	formData,
}: {
	formData: PartialFormOptions;
}) => void;

export type WithForm = (callback: (formData: FormOptions) => void) => void;

export type ClearForm = () => void;

export type PartialFormOptions = Partial<FormOptions> &
	Required<Pick<FormOptions, "currentStep">>;

export interface FormContextOptions {
	form?: FormOptions;
	updateForm: UpdateForm;
	withForm: WithForm;
	clearForm: ClearForm;
}
