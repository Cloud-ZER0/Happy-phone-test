import { FormFirstStepErrorsCodes } from "../codes/first-step-error-codes";

export const firstStepErrorMessages = {
	[FormFirstStepErrorsCodes.senderName.required]: "Заполните это поле",
	[FormFirstStepErrorsCodes.phone.required]: "Заполните это поле",
	[FormFirstStepErrorsCodes.phone.format]:
		"Неправильный формат номера телефона",
	[FormFirstStepErrorsCodes.senderCity.required]: "Заполните это поле",
};

export function getFirstStepErrorMessage(code: string) {
	const message = (firstStepErrorMessages as Record<string, string>)[code];

	return message ?? code;
}
