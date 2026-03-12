import { type z } from "zod";

export const isBrowser = (): boolean => typeof window !== "undefined";

export const safeParseJson = <T>(
	raw: string,
	schema: z.ZodType<T>,
): T | undefined => {
	try {
		const parsed: unknown = JSON.parse(raw);
		const result = schema.safeParse(parsed);
		return result.success ? result.data : undefined;
	} catch {
		return undefined;
	}
};

export const getLocalStorageItem = <T>(
	key: string,
	schema: z.ZodType<T>,
): T | undefined => {
	// eslint-disable-next-line unicorn/prefer-global-this
	if (!isBrowser()) {
		return undefined;
	}

	const raw = localStorage.getItem(key);
	if (raw == undefined) {
		return undefined;
	}

	return safeParseJson(raw, schema);
};

export const setLocalStorageItem = (key: string, value: unknown): void => {
	// eslint-disable-next-line unicorn/prefer-global-this
	if (!isBrowser()) {
		return;
	}

	localStorage.setItem(key, JSON.stringify(value));
};
