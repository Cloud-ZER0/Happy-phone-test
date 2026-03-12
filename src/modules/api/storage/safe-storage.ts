import { type z } from "zod";

export const isBrowser = (): boolean =>
	// eslint-disable-next-line unicorn/no-typeof-undefined
	typeof globalThis.window !== "undefined";

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
	if (!isBrowser()) {
		return undefined;
	}

	const raw = globalThis.localStorage.getItem(key);
	if (raw == undefined) {
		return undefined;
	}

	return safeParseJson(raw, schema);
};

export const setLocalStorageItem = (key: string, value: unknown): void => {
	if (!isBrowser()) {
		return;
	}

	globalThis.localStorage.setItem(key, JSON.stringify(value));
};

export const removeLocalStorageItem = (key: string): void => {
	if (!isBrowser()) {
		return;
	}

	globalThis.localStorage.removeItem(key);
};
