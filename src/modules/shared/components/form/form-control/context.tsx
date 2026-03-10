"use client";

import { createContext } from "react";

export interface FormControlContextType {
	getErrorMessage?: (message: string) => string;
}

export const FormControlContext = createContext<
	FormControlContextType | undefined
>(undefined);
