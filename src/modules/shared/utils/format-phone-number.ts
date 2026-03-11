export const formatPhoneNumber = (rawNumber: string): string => {
	return rawNumber.replace(
		/(\d)(\d{3})(\d{3})(\d{2})(\d{2})/,
		"+$1 ($2) $3-$4-$5",
	);
};
