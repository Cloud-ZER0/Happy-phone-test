import { FormSecondStepErrorsCodes } from "../codes/second-step-error-codes";

export const secondStepErrorMessages = {
	[FormSecondStepErrorsCodes.recipientName.required]: "Заполните это поле",
	[FormSecondStepErrorsCodes.cargoType.required]: "Заполните это поле",
	[FormSecondStepErrorsCodes.recipientCity.required]: "Заполните это поле",
	[FormSecondStepErrorsCodes.weight.max]:
		"Максимальный вес должен быть не более 30 кг",
	[FormSecondStepErrorsCodes.weight.min]: "Минимальный вес 0.1 кг",
	[FormSecondStepErrorsCodes.weight.format]: "Недопустимый формат",
	[FormSecondStepErrorsCodes.recipientCity.matches]:
		"Город назначения не может совпадать с городом отправления",
};

export function getSecondStepErrorMessage(code: string) {
	const message = (secondStepErrorMessages as Record<string, string>)[code];

	return message ?? code;
}
