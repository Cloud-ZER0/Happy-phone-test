"use client";

import { type ReactNode } from "react";

import { FormControlContext, type FormControlContextType } from "./context";

export interface FormControlProviderProps extends FormControlContextType {
	children?: ReactNode;
}

export function FormControlProvider({
	children,
	...props
}: FormControlProviderProps) {
	return (
		<FormControlContext.Provider value={props}>
			{children}
		</FormControlContext.Provider>
	);
}
