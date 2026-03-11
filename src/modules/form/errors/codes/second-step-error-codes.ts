export const FormSecondStepErrorsCodes = {
	recipientName: {
		required: "form.recipientName.required",
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
		required: "form.recipientCity.required",
		matches: "form.recipientCity.matches",
	},
} as const;
