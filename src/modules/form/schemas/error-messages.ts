import {
	FormFirstStepErrorsCodes,
	FormSecondStepErrorsCodes,
	FormThirdStepErrorsCodes,
} from "./errors";

export const firstStepErrorMessages = {
	[FormFirstStepErrorsCodes.name.required]: "Заполните это поле",
	[FormFirstStepErrorsCodes.phone.required]: "Это поле обязательное",
	[FormFirstStepErrorsCodes.phone.format]:
		"Неправильный формат номера телефона",
	[FormFirstStepErrorsCodes.from.required]: "Заполните это поле",
};

export function getFirstStepErrorMessage(code: string) {
	const message = (firstStepErrorMessages as Record<string, string>)[code];

	return message ?? code;
}

export const secondStepErrorMessages = {
	[FormSecondStepErrorsCodes.name.required]: "Заполните это поле",
	[FormSecondStepErrorsCodes.cargoType.required]: "Заполните это поле",
	[FormSecondStepErrorsCodes.to.required]: "Заполните это поле",
	[FormSecondStepErrorsCodes.weight.max]:
		"Максимальный вес должен быть не более 30 кг",
	[FormSecondStepErrorsCodes.weight.min]: "Минимальный вес 0.1 кг",
	[FormSecondStepErrorsCodes.weight.format]: "Недопустимый формат",
	[FormSecondStepErrorsCodes.to.matches]:
		"Город назначения не может совпадать с городом отправления",
};

export function getSecondStepErrorMessage(code: string) {
	const message = (secondStepErrorMessages as Record<string, string>)[code];

	return message ?? code;
}

export const thirdStepErrorMessages = {
	[FormThirdStepErrorsCodes.agreement.required]: "Это поле обязательное",
};

export function getThirdStepErrorMessage(code: string) {
	const message = (thirdStepErrorMessages as Record<string, string>)[code];

	return message ?? code;
}
