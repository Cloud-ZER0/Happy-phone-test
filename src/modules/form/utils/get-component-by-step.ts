import { createElement } from "react";

import { FormStepOne } from "../components/form-step-one";
import { FormStepThree } from "../components/form-step-three/form-step-three";
import { FormStepTwo } from "../components/form-step-two/form-step-two";
import { type FormOptions } from "../schemas";

export const getComponentByStep = ({
	formStep,
}: {
	formStep: FormOptions["currentStep"] | undefined;
}): React.ReactNode => {
	if (formStep != undefined) {
		switch (formStep) {
			case "1": {
				return createElement(FormStepOne);
			}
			case "2": {
				return createElement(FormStepTwo);
			}
			case "3": {
				return createElement(FormStepThree);
			}
			default: {
				const _exhaustiveCheck: never = formStep;
				throw new Error(`Unhandled step: ${_exhaustiveCheck}`);
			}
		}
	}
	return createElement(FormStepOne);
};
