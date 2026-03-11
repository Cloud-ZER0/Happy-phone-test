export const formatPhone = (value: string) => {
	const digits = value.replaceAll(/\D/g, "");
	if (digits === "") {
		return "";
	}

	const mainDigits =
		digits.startsWith("7") || digits.startsWith("8") ? digits.slice(1) : digits;

	let result = "+7 ";
	if (mainDigits.length > 0) {
		result += "(" + mainDigits.slice(0, 3);
	}
	if (mainDigits.length >= 4) {
		result += ") " + mainDigits.slice(3, 6);
	}
	if (mainDigits.length >= 7) {
		result += "-" + mainDigits.slice(6, 8);
	}
	if (mainDigits.length >= 9) {
		result += "-" + mainDigits.slice(8, 10);
	}

	return result;
};
