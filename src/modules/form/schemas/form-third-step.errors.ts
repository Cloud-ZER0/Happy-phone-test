export const FormThirdStepErrorsCodes = {
	agreement: {
		required: "form.agreement.required",
	},
} as const;

export const thirdStepErrorMessages = {
	[FormThirdStepErrorsCodes.agreement.required]: "Это поле обязательное",
};

export function getThirdStepErrorMessage(code: string) {
	const message = (thirdStepErrorMessages as Record<string, string>)[code];

	return message ?? code;
}

