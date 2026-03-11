import {
	type FirtStepFormOptions,
	type SecondStepFormOptions,
} from "@/modules/form/types";

export interface OrderType extends FirtStepFormOptions, SecondStepFormOptions {
	id: string;
	status: "active" | "canceled";
	createdAt: string;
}
