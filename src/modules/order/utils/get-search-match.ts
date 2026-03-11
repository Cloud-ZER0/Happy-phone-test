export const getSearchMatch = (
	originalStr: string,
	searchStr: string,
): boolean => {
	return searchStr != ""
		? originalStr.toLowerCase().includes(searchStr.toLowerCase())
		: true;
};
