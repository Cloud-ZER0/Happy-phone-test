import { FirtStepFormOptions } from "./schemas/form-first-step.schema";
import { SecondStepFormOptions } from "./schemas/form-second-step.schema";


export { type CargoType } from "./schemas/form-second-step.schema";
export { type SecondStepFormOptions } from "./schemas/form-second-step.schema";
export { type FirtStepFormOptions } from "./schemas/form-first-step.schema";
export { type FormOptions } from "./schemas/form-options.schema";

export type FormFields = FirtStepFormOptions & SecondStepFormOptions;
export type CommonKey = keyof FormFields;
