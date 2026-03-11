export const FormFirstStepErrorsCodes = {
	senderName: {
		required: "form.name.required",
	},
	phone: {
		required: "form.phone.required",
		format: "form.phone.format",
	},
	senderCity: {
		required: "form.from.required",
	},
} as const;
