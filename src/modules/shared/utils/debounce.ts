// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function debounce<T extends (...args: any[]) => any>(
	fn: T,
	delay: number,
) {
	let timeoutId: ReturnType<typeof setTimeout>;

	return function (this: ThisParameterType<T>, ...args: Parameters<T>) {
		clearTimeout(timeoutId);
		timeoutId = setTimeout(() => {
			fn.apply(this, args);
		}, delay);
	};
}
