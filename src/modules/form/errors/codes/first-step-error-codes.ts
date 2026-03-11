export const FormFirstStepErrorsCodes = {
	senderName: {
		required: "form.senderName.required",
	},
	phone: {
		required: "form.phone.required",
		format: "form.phone.format",
	},
	senderCity: {
		required: "form.senderCity.required",
	},
} as const;
