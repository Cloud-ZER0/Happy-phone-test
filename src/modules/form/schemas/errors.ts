export const FormFirstStepErrorsCodes = {
	name: {
		required: "form.name.required",
	},
	phone: {
		required: "form.phone.required",
		max: "form.phone.maxLength",
		format: "form.phone.format",
	},
	from: {
		required: "form.from.required",
	},
} as const;

export const FormThirdStepErrorsCodes = {
	agreement: {
		required: "form.agreement.required",
	},
} as const;

export const FormSecondStepErrorsCodes = {
	name: {
		required: "form.name.required",
	},
	weight: {
		format: "form.weight.format",
		max: "form.weight.max",
		min: "form.weight.min",
	},
	cargoType: {
		required: "form.cargo.required",
	},
	to: {
		required: "form.to.required",
		matches: "form.to.matches",
	},
} as const;
