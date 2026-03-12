import dynamic from "next/dynamic";
import { type JSX } from "react";

import { Loading } from "@/modules/shared/components/loading/loading";

import { FormStepOne } from "../components/form-step-one";
import { type FormOptions } from "../types";

const LazyStepTwo = dynamic(
	() =>
		import("../components/form-step-two/form-step-two").then(
			(mod) => mod.FormStepTwo,
		),
	{
		ssr: false,
		loading: () => <Loading />,
	},
);
const LazyStepThree = dynamic(
	() =>
		import("../components/form-step-three/form-step-three").then(
			(mod) => mod.FormStepThree,
		),
	{
		ssr: false,
		loading: () => <Loading />,
	},
);

export const getComponentByStep = (
	formStep: FormOptions["currentStep"] = "1",
): JSX.Element => {
	switch (formStep) {
		case "1": {
			return <FormStepOne />;
		}
		case "2": {
			return <LazyStepTwo />;
		}
		case "3": {
			return <LazyStepThree />;
		}
		default: {
			const _exhaustiveCheck: never = formStep;
			throw new Error(`Unhandled step: ${_exhaustiveCheck}`);
		}
	}
};
