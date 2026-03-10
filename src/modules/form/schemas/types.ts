import { type FirtStepFormOptions } from "./form-first-step.schema";
import { type SecondStepFormOptions } from "./form-second-step.schema";

export interface FormOptions {
	firstStep?: FirtStepFormOptions;
	secondStep?: SecondStepFormOptions;
	currentStep: "1" | "2" | "3";
}

export type FormFields = FirtStepFormOptions & SecondStepFormOptions;
export type CommonKey = keyof FormFields;
