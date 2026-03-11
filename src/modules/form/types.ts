import { type FirtStepFormOptions } from "./schemas/form-first-step.schema";
import { type SecondStepFormOptions } from "./schemas/form-second-step.schema";

export { type CargoType } from "./schemas/form-second-step.schema";
export { type SecondStepFormOptions } from "./schemas/form-second-step.schema";
export { type FirtStepFormOptions } from "./schemas/form-first-step.schema";

export interface FormOptions {
	firstStep?: FirtStepFormOptions;
	secondStep?: SecondStepFormOptions;
	currentStep: "1" | "2" | "3";
}

export type FormFields = FirtStepFormOptions & SecondStepFormOptions;
export type CommonKey = keyof FormFields;
