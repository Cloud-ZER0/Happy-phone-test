import dynamic from "next/dynamic";
import { createElement, Suspense } from "react";

import { Loading } from "@/modules/shared/components/loading/loading";

import { FormStepOne } from "../components/form-step-one";
import { type FormOptions } from "../schemas";

const LazyStepTwo = dynamic(
	() =>
		import("../components/form-step-two/form-step-two").then(
			(mod) => mod.FormStepTwo,
		),
	{ ssr: false },
);
const LazyStepThree = dynamic(
	() =>
		import("../components/form-step-three/form-step-three").then(
			(mod) => mod.FormStepThree,
		),
	{ ssr: false },
);

export const getComponentByStep = ({
	formStep,
}: {
	formStep: FormOptions["currentStep"] | undefined;
}): React.ReactNode => {
	if (formStep != undefined) {
		switch (formStep) {
			case "1": {
				return <FormStepOne />;
			}
			case "2": {
				return (
					<Suspense fallback={<Loading />}>
						<LazyStepTwo />
					</Suspense>
				);
			}
			case "3": {
				return (
					<Suspense fallback={<Loading />}>
						<LazyStepThree />
					</Suspense>
				);
			}
			default: {
				const _exhaustiveCheck: never = formStep;
				throw new Error(`Unhandled step: ${_exhaustiveCheck}`);
			}
		}
	}
	return createElement(FormStepOne);
};
