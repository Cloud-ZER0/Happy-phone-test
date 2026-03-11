"use client";

import {
	usePathname,
	useRouter,
	useSearchParams as useSearchParamsNext,
} from "next/navigation";
import { useCallback } from "react";

export type QueryValue = string | undefined;

export type GetFn = (key: string) => string | null;

export type SetFn = (newParams: Record<string, QueryValue>) => void;

export interface UseSearchParamsReturn {
	get: GetFn;
	set: SetFn;
}

export const useSearchParams = (): UseSearchParamsReturn => {
	const router = useRouter();
	const pathname = usePathname();
	const searchParams = useSearchParamsNext();

	const createQueryString = useCallback(
		(paramsToUpdate: Record<string, QueryValue>) => {
			const current = new URLSearchParams(searchParams.toString());

			for (const [key, value] of Object.entries(paramsToUpdate)) {
				if (value === "" || value == undefined) {
					current.delete(key);
				} else {
					current.set(key, value);
				}
			}

			return current.toString();
		},
		[searchParams],
	);

	const get = useCallback(
		(key: string) => searchParams.get(key),
		[searchParams],
	);

	const set = useCallback(
		(newParams: Record<string, QueryValue>) => {
			const query = createQueryString(newParams);
			const url = `${pathname}${query != "" ? `?${query}` : ""}`;
			router.push(url, { scroll: false });
		},
		[router, pathname, createQueryString],
	);

	return { get, set };
};
