export const FormSecondStepErrorsCodes = {
	recipientName: {
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
	recipientCity: {
		required: "form.to.required",
		matches: "form.to.matches",
	},
} as const;
